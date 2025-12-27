const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { validationResult } = require("express-validator");
const userService = require("../services/UserService");
const userCourseService = require("../services/UserCourseService");
const userBadgeService = require("../services/UserBadgeService");
const UserTradeService = require("../services/UserTradeService");

const getAllUsers = async (req, res) => {
    const { role } = req.query;
    try {
        const users = await userService.getAllUsers(role);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error", details: error.message });
    }
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await userService.getUserById(id);
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Failed to get user`, details: error.message });
    }
};

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: "Input value tidak sesuai", errors: errors.array() });
    const { name, username, password, role, student_id, student_point, student_course, student_badge, instructor_id, instructor_course, image } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser(name, username, hashedPassword, role, student_id, student_point ? parseInt(student_point) : 0, student_course ? parseInt(student_course) : 0, student_badge ? parseInt(student_badge) : 0, instructor_id, instructor_course ? parseInt(instructor_course) : null, image);
        res.status(201).json({ message: `Success`, user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Failed", details: error.message });
    }
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = { ...req.body };

    try {
        // Simpan Data Utama
        const updatedUser = await userService.updateUser(id, updateData);

        // 1. TRIGGER FINISH_ASSESSMENT (Jika poin bertambah)
        if (updateData.points !== undefined) {
            await userService.updateChallengeProgress(id, 'FINISH_ASSESSMENT');
            
            // 2. TRIGGER PERFECT_SCORE (Jika nilai kuis 100)
            if (updateData.lastScore === 100) {
                await userService.updateChallengeProgress(id, 'PERFECT_SCORE');
            }
        }
        
        // 3. TRIGGER COMPLETE_CHAPTER (Jika materi selesai)
        if (updateData.materialDone === true) {
            await userService.updateChallengeProgress(id, 'COMPLETE_CHAPTER');
        }

        res.status(200).json({ message: "Update Successful", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error", details: error.message });
    }
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await userService.deleteUser(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).json({ message: "Failed", details: error.message });
    }
};

const getCoursesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const courses = await userCourseService.getCoursesByUser(userId);
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error", details: error.message });
    }
};

const getBadgesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const badges = await userBadgeService.getBadgesByUser(userId);
        res.status(200).json(badges);
    } catch (error) {
        res.status(500).json({ message: "Error", details: error.message });
    }
};

const getTradesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const trades = await UserTradeService.getTradesByUser(userId);
        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({ message: "Error", details: error.message });
    }
};

const purchaseAvatar = async (req, res) => {
    const { user_id, avatar_id } = req.body;
    const prices = { 1: 0, 2: 100, 3: 100, 4: 100, 5: 200, 6: 200, 7: 250, 8: 250, 9: 300, 10: 300, 11: 350, 12: 350 };
    const price = prices[avatar_id] !== undefined ? prices[avatar_id] : 9999;
    try {
        const result = await userService.addPurchasedAvatar(parseInt(user_id), parseInt(avatar_id), price);
        res.status(200).json({ message: "Success", user: result.user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getOwnedAvatars = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const avatars = await userService.getOwnedAvatars(userId);
        res.status(200).json({ data: avatars });
    } catch (error) {
        res.status(500).json({ message: "Error", details: error.message });
    }
};

const getMyChallenges = async (req, res) => {
    const userId = parseInt(req.params.id);
    const masterChallenges = [
        { id: 101, title: "Pejuang Materi", description: "Baca 1 materi hari ini", goal: 1, rewardPoint: 20, type: "COMPLETE_CHAPTER" },
        { id: 102, title: "Ahli Kuis", description: "Selesaikan 1 Assessment", goal: 1, rewardPoint: 50, type: "FINISH_ASSESSMENT" },
        { id: 103, title: "Marathon Belajar", description: "Selesaikan 3 Assessment", goal: 3, rewardPoint: 150, type: "FINISH_ASSESSMENT" },
        { id: 104, title: "Absensi Kilat", description: "Buka aplikasi hari ini", goal: 1, rewardPoint: 10, type: "DAILY_LOGIN" },
        { id: 105, title: "Reviewer Handal", description: "Selesaikan 2 materi chapter", goal: 2, rewardPoint: 40, type: "COMPLETE_CHAPTER" },
        { id: 106, title: "Pantang Menyerah", description: "Kerjakan 1 kuis sulit", goal: 1, rewardPoint: 60, type: "FINISH_ASSESSMENT" },
        { id: 107, title: "Eksplorasi Ilmu", description: "Buka 1 course baru", goal: 1, rewardPoint: 25, type: "START_COURSE" }, // Akurat: START_COURSE
        { id: 108, title: "Kolektor Poin", description: "Selesaikan 5 interaksi materi", goal: 5, rewardPoint: 100, type: "MATERIAL_INTERACTION" },
        { id: 109, title: "Speed Learner", description: "Selesaikan 1 chapter penuh", goal: 1, rewardPoint: 80, type: "COMPLETE_CHAPTER" },
        { id: 110, title: "Master Kuis", description: "Dapatkan skor kuis sempurna", goal: 1, rewardPoint: 70, type: "PERFECT_SCORE" }, // Akurat: PERFECT_SCORE
        { id: 111, title: "Konsistensi", description: "Login hari ini", goal: 1, rewardPoint: 30, type: "DAILY_LOGIN" },
        { id: 112, title: "Penjelajah Kurikulum", description: "Selesaikan materi penutup chapter", goal: 1, rewardPoint: 45, type: "COMPLETE_CHAPTER" }
    ];

    try {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let userChallenges = await prisma.userChallenge.findMany({
            where: { userId, updatedAt: { gte: today } }
        });

        if (userChallenges.length !== 2) {
            await prisma.userChallenge.deleteMany({ where: { userId, isCompleted: false } });

            const shuffled = [...masterChallenges].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 2);

            for (const ch of selected) {
                await prisma.userChallenge.create({
                    data: { userId, challengeId: ch.id, currentProgress: 0, isCompleted: false, isClaimed: false }
                });
            }

            userChallenges = await prisma.userChallenge.findMany({
                where: { userId, updatedAt: { gte: today } }
            });
        }

        const responseData = userChallenges.map(uc => {
            const detail = masterChallenges.find(m => m.id === uc.challengeId);
            return { ...uc, challenge: detail || { title: "Unknown", rewardPoint: 0 } };
        });

        res.status(200).json(responseData);
    } catch (error) {
        console.error("Error getMyChallenges:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

const claimChallengeReward = async (req, res) => {
    const { userId, userChallengeId } = req.body;
    try {
        const result = await userService.claimReward(userId, userChallengeId);
        res.status(200).json({ message: "Reward claimed!", user: result });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

module.exports = {
    getAllUsers, getUserById, createUser, updateUser, deleteUser,
    getTradesByUser, getCoursesByUser, getBadgesByUser, purchaseAvatar,
    getOwnedAvatars, getMyChallenges, claimChallengeReward
};