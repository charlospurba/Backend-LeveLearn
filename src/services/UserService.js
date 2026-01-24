const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- FUNGSI USER MANAGEMENT ---
exports.getAllUsers = async (role) => {
    try {
        return await prisma.user.findMany({
            where: role ? { role: role.toUpperCase() } : {},
        });
    } catch (error) {
        throw new Error("Error retrieving users: " + error.message);
    }
};

exports.getUserById = async (id) => {
    return await prisma.user.findUnique({ where: { id: parseInt(id) } });
};

exports.createUser = async (name, username, password, role, studentId, points, totalCourses, badges, instructorId, instructorCourses, image) => {
    return await prisma.user.create({
        data: {
            name, username, password, role, studentId,
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
};

exports.updateUser = async (id, updateData) => {
    const userId = parseInt(id);
    const currentUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!currentUser) throw new Error("User not found");

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // LOGIKA STREAK OTOMATIS
    if (updateData.materialDone === true || updateData.points !== undefined) {
        let lastDate = currentUser.lastInteraction ? new Date(currentUser.lastInteraction) : null;
        let lastDateNormalized = lastDate ? new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate()) : null;

        if (!lastDateNormalized || today > lastDateNormalized) {
            const diffTime = lastDateNormalized ? Math.abs(today - lastDateNormalized) : null;
            const diffDays = diffTime ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : null;

            if (diffDays === 1 || !lastDateNormalized) {
                updateData.streak = (currentUser.streak || 0) + 1;
            } else if (diffDays > 1) {
                updateData.streak = 1;
            }
            updateData.lastInteraction = now;
            await this.updateChallengeProgress(userId, 'DAILY_LOGIN');
        }
    }

    return await prisma.user.update({
        where: { id: userId },
        data: updateData,
    });
};

exports.deleteUser = async (id) => {
    await prisma.user.delete({ where: { id: parseInt(id) } });
    return `Success deleting user with id ${id}`;
};

// --- FUNGSI CHALLENGE & POIN ---
exports.updateChallengeProgress = async (userId, type) => {
    try {
        const userIdInt = parseInt(userId);
        const masterChallenges = [
            { id: 101, goal: 1, type: "COMPLETE_CHAPTER" },
            { id: 102, goal: 1, type: "FINISH_ASSESSMENT" },
            { id: 103, goal: 3, type: "FINISH_ASSESSMENT" },
            { id: 104, goal: 1, type: "DAILY_LOGIN" },
            { id: 105, goal: 2, type: "COMPLETE_CHAPTER" },
            { id: 106, goal: 1, type: "FINISH_ASSESSMENT" },
            { id: 107, goal: 1, type: "START_COURSE" }, 
            { id: 108, goal: 5, type: "MATERIAL_INTERACTION" },
            { id: 109, goal: 1, type: "COMPLETE_CHAPTER" },
            { id: 110, goal: 1, type: "PERFECT_SCORE" }, 
            { id: 111, goal: 1, type: "DAILY_LOGIN" },
            { id: 112, goal: 1, type: "COMPLETE_CHAPTER" }
        ];

        const userChallenges = await prisma.userChallenge.findMany({
            where: { userId: userIdInt, isClaimed: false }
        });

        for (const userCh of userChallenges) {
            const rule = masterChallenges.find(m => m.id === userCh.challengeId);
            if (rule && rule.type === type) {
                const newProgress = userCh.currentProgress + 1;
                const isNowCompleted = newProgress >= rule.goal;

                await prisma.userChallenge.update({
                    where: { id: userCh.id },
                    data: {
                        currentProgress: newProgress > rule.goal ? rule.goal : newProgress,
                        isCompleted: isNowCompleted,
                        updatedAt: new Date()
                    }
                });
                console.log(`>>> SUCCESS: Challenge ${rule.id} (${type}) updated for user ${userIdInt}`);
            }
        }
    } catch (error) {
        console.error("Error updateChallengeProgress:", error.message);
    }
};

exports.claimReward = async (userId, userChallengeId) => {
    const rewardsMap = {
        101: 20, 102: 50, 103: 150, 104: 10, 105: 40, 106: 60,
        107: 25, 108: 100, 109: 80, 110: 70, 111: 30, 112: 45
    };

    return await prisma.$transaction(async (tx) => {
        const uc = await tx.userChallenge.findUnique({ where: { id: parseInt(userChallengeId) } });
        if (!uc || !uc.isCompleted) throw new Error("Tantangan belum selesai");
        if (uc.isClaimed) throw new Error("Hadiah sudah diambil");

        const rewardValue = rewardsMap[uc.challengeId] || 0;
        await tx.userChallenge.update({
            where: { id: uc.id },
            data: { isClaimed: true, updatedAt: new Date() }
        });

        return await tx.user.update({
            where: { id: parseInt(userId) },
            data: { points: { increment: rewardValue } }
        });
    });
};

exports.addPurchasedAvatar = async (userId, tradeId, price) => {
    return await prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({ where: { id: parseInt(userId) } });
        if (!user) throw new Error("User tidak ditemukan");
        
        const currentPoints = parseInt(user.points || 0);
        if (currentPoints < price) throw new Error("Poin tidak mencukupi");

        const tradeItem = await tx.trade.findUnique({ where: { id: parseInt(tradeId) } });
        if (!tradeItem) throw new Error("Item Trade tidak ditemukan");

        const isAvatar = tradeItem.title.toLowerCase().includes("avatar");
        if (!isAvatar) {
            const badgeToUse = await tx.userBadge.findFirst({
                where: { userId: parseInt(userId), isPurchased: false, badge: { type: tradeItem.requiredBadgeType } }
            });
            if (!badgeToUse) throw new Error(`Butuh Badge ${tradeItem.requiredBadgeType}`);
            await tx.userBadge.update({ where: { id: badgeToUse.id }, data: { isPurchased: true } });
        }

        const newTrade = await tx.userTrade.create({
            data: { userId: parseInt(userId), tradeId: parseInt(tradeId), purchasedAt: new Date() },
        });

        const updatedUser = await tx.user.update({
            where: { id: parseInt(userId) },
            data: { points: currentPoints - price },
        });

        return { trade: newTrade, user: updatedUser };
    });
};

exports.getOwnedAvatars = async (userId) => {
    const owned = await prisma.userTrade.findMany({
        where: { userId: parseInt(userId) },
        select: { tradeId: true }
    });
    return owned.map(item => ({ avatar_id: item.tradeId }));
};