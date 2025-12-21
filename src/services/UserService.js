const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- FUNGSI USER MANAGEMENT ---

exports.getAllUsers = async (role) => {
  try {
    let users;
    if (role) {
      users = await prisma.user.findMany({
        where: { role: role.toUpperCase() },
      });
    } else {
      users = await prisma.user.findMany();
    }
    return users;
  } catch (error) {
    throw new Error("Error retrieving users: " + error.message);
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    throw new Error("Error retrieving user by ID: " + error.message);
  }
};

exports.createUser = async (name, username, password, role, studentId, points, totalCourses, badges, instructorId, instructorCourses, image) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        password,
        role,
        studentId,
        points: points || 0,
        totalCourses: totalCourses || 0,
        badges: badges || 0,
        streak: 0,           
        lastInteraction: null, 
        instructorId,
        instructorCourses,
        image,
        createdAt: new Date(),
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

exports.updateUser = async (id, updateData) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: updateData, 
    });
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    await prisma.user.delete({ where: { id } });
    return `Success deleting user with id ${id}`;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

// --- FUNGSI GAMIFIKASI & TRANSAKSI ---

exports.addPurchasedAvatar = async (userId, tradeId, price) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Cek saldo poin user
    const user = await tx.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User tidak ditemukan");
    
    const currentPoints = parseInt(user.points || 0);
    if (currentPoints < price) throw new Error("Poin tidak mencukupi");

    // 2. Cek item yang ditukar (Trade Model)
    const tradeItem = await tx.trade.findUnique({ where: { id: tradeId } });
    if (!tradeItem) throw new Error("Item Trade tidak ditemukan");

    // 3. LOGIKA KONSUMSI BADGE (Hanya jika bukan Avatar)
    const isAvatar = tradeItem.title.toLowerCase().includes("avatar");

    if (!isAvatar) {
      const badgeToUse = await tx.userBadge.findFirst({
        where: {
          userId: userId,
          isPurchased: false,
          badge: {
            type: tradeItem.requiredBadgeType
          }
        }
      });

      if (!badgeToUse) {
        throw new Error(`Anda tidak memiliki Badge ${tradeItem.requiredBadgeType} yang tersedia untuk ditukar`);
      }

      // Tandai badge tersebut sebagai 'terpakai'
      await tx.userBadge.update({
        where: { id: badgeToUse.id },
        data: { isPurchased: true }
      });
    }

    // 4. Catat kepemilikan di tabel UserTrade
    const newTrade = await tx.userTrade.create({
      data: {
        userId: userId,
        tradeId: tradeId,
        purchasedAt: new Date(),
      },
    });

    // 5. Potong poin user
    const updatedUser = await tx.user.update({
      where: { id: userId },
      data: { points: currentPoints - price },
    });

    return { trade: newTrade, user: updatedUser };
  });
};

exports.getOwnedAvatars = async (userId) => {
  try {
    const owned = await prisma.userTrade.findMany({
      where: { userId: userId },
      select: { tradeId: true }
    });
    return owned.map(item => ({ avatar_id: item.tradeId }));
  } catch (error) {
    throw new Error("Gagal mengambil koleksi: " + error.message);
  }
};