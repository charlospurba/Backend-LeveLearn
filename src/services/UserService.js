const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- FUNGSI USER MANAGEMENT ---

/**
 * Mendapatkan semua user, bisa difilter berdasarkan role
 */
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

/**
 * Mendapatkan satu user berdasarkan ID
 */
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

/**
 * Membuat user baru (Registrasi)
 * Menambahkan inisialisasi streak: 0
 */
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
        streak: 0,           // Inisialisasi streak baru
        lastInteraction: null, // Belum ada interaksi awal
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

/**
 * Update data user (Profil, Poin, Streak, dan LastInteraction)
 */
exports.updateUser = async (id, updateData) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: updateData, // Prisma akan otomatis memetakan field yang cocok dari updateData
    });
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

/**
 * Menghapus user berdasarkan ID
 */
exports.deleteUser = async (id) => {
  try {
    await prisma.user.delete({ where: { id } });
    return `Success deleting user with id ${id}`;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

// --- FUNGSI GAMIFIKASI & TRANSAKSI ---

/**
 * Transaksi pembelian avatar menggunakan poin
 */
exports.addPurchasedAvatar = async (userId, tradeId, price) => {
  // Menggunakan Transaction untuk memastikan konsistensi data
  return await prisma.$transaction(async (tx) => {
    // 1. Cek saldo poin user
    const user = await tx.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User tidak ditemukan");
    
    const currentPoints = parseInt(user.points || 0);
    if (currentPoints < price) throw new Error("Poin tidak mencukupi untuk menukar avatar ini");

    // 2. Catat kepemilikan di tabel UserTrade (user_trades)
    const newTrade = await tx.userTrade.create({
      data: {
        userId: userId,
        tradeId: tradeId,
        purchasedAt: new Date(),
      },
    });

    // 3. Potong poin user
    const updatedUser = await tx.user.update({
      where: { id: userId },
      data: { points: currentPoints - price },
    });

    return { trade: newTrade, user: updatedUser };
  });
};

/**
 * Mendapatkan daftar ID avatar yang sudah dimiliki user
 */
exports.getOwnedAvatars = async (userId) => {
  try {
    const owned = await prisma.userTrade.findMany({
      where: { userId: userId },
      select: { tradeId: true }
    });
    // Mapping ke format yang diharapkan frontend
    return owned.map(item => ({ avatar_id: item.tradeId }));
  } catch (error) {
    throw new Error("Gagal mengambil koleksi avatar: " + error.message);
  }
};