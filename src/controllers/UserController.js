// @ts-ignore
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");

// Import Services
const userService = require("../services/UserService");
const userCourseService = require("../services/UserCourseService");
const userBadgeService = require("../services/UserBadgeService");
const UserTradeService = require("../services/UserTradeService");

/**
 * Controller untuk mendapatkan daftar user
 */
const getAllUsers = async (req, res) => {
    const { role } = req.query;
    try {
        const users = await userService.getAllUsers(role);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error", details: error.message });
    }
};

/**
 * Controller untuk mendapatkan user by id
 */
const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: `Failed to get user with id ${id}`,
            details: error.message,
        });
    }
};

/**
 * Controller untuk membuat user baru (Registrasi)
 */
const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Input value tidak sesuai", errors: errors.array() });
    }

    const { 
        name, username, password, role, 
        student_id, student_point, student_course, student_badge, 
        instructor_id, instructor_course, image 
    } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser(
            name,
            username, 
            hashedPassword,
            role,
            student_id,
            student_point ? parseInt(student_point) : 0,
            student_course ? parseInt(student_course) : 0,
            student_badge ? parseInt(student_badge) : 0,
            instructor_id,
            instructor_course ? parseInt(instructor_course) : null,
            image
        );

        res.status(201).json({
            message: `Successfully registered user ${name} as ${role}`,
            user: newUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create user", details: error.message });
    }
};

/**
 * Controller untuk update user by id (Profil, Poin, Streak, dsb)
 */
const updateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Input value tidak sesuai", errors: errors.array() });
    }

    const id = parseInt(req.params.id);
    const updateData = { ...req.body };

    try {
        // Enkripsi password jika diubah
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        // Sanitasi tipe data Integer agar Prisma/Database tidak error
        if (updateData.points !== undefined) updateData.points = parseInt(updateData.points);
        if (updateData.totalCourses !== undefined) updateData.totalCourses = parseInt(updateData.totalCourses);
        if (updateData.badges !== undefined) updateData.badges = parseInt(updateData.badges);
        
        // --- TAMBAHAN UNTUK STREAK ---
        if (updateData.streak !== undefined) {
            updateData.streak = parseInt(updateData.streak);
        }
        
        // Konversi string ISO date dari Flutter menjadi object Date JavaScript
        if (updateData.lastInteraction !== undefined) {
            updateData.lastInteraction = updateData.lastInteraction ? new Date(updateData.lastInteraction) : null;
        }

        if (updateData.instructorCourses !== undefined) {
            updateData.instructorCourses = updateData.instructorCourses ? parseInt(updateData.instructorCourses) : null;
        }

        const updatedUser = await userService.updateUser(id, updateData);
        res.status(200).json({
            message: `Successfully updated ${updatedUser.name}'s data`,
            user: updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to update user", details: error.message });
    }
};

/**
 * Controller untuk delete user by id
 */
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await userService.deleteUser(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", details: error.message });
    }
};

/** * SPECIAL CONTROLLERS (Relasi)
 */

const getCoursesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const courses = await userCourseService.getCoursesByUser(userId);
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data kursus", details: error.message });
    }
};

const getBadgesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const badges = await userBadgeService.getBadgesByUser(userId);
        res.status(200).json(badges);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data badge", details: error.message });
    }
};

const getTradesByUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const trades = await UserTradeService.getTradesByUser(userId);
        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data trade", details: error.message });
    }
};

/**
 * GAMIFICATION: Controller untuk Memproses Transaksi Pembelian Avatar
 */
const purchaseAvatar = async (req, res) => {
    const { user_id, avatar_id } = req.body;
    
    // Validasi input
    if (!user_id || !avatar_id) {
        return res.status(400).json({ message: "user_id dan avatar_id diperlukan" });
    }

    // Mapping Harga (Wajib sinkron dengan Flutter)
    const prices = { 
        1: 0, 2: 100, 3: 100, 4: 100, 5: 200, 6: 200, 
        7: 250, 8: 250, 9: 300, 10: 300, 11: 350, 12: 350 
    };
    
    const price = prices[avatar_id] !== undefined ? prices[avatar_id] : 999999; 

    try {
        const result = await userService.addPurchasedAvatar(
            parseInt(user_id), 
            parseInt(avatar_id), 
            price
        );

        res.status(200).json({
            message: "Purchase successful",
            user: result.user
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Controller untuk mengambil list ID avatar yang sudah dibeli
 */
const getOwnedAvatars = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const avatars = await userService.getOwnedAvatars(userId);
        res.status(200).json({ data: avatars });
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil koleksi avatar", details: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getTradesByUser,
    getCoursesByUser,
    getBadgesByUser,
    purchaseAvatar,
    getOwnedAvatars
};