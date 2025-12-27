const express = require('express');
// @ts-ignore
const userController = require('../controllers/UserController');
const { uploadImage } = require('../middlewares/FileUpload');

// TAMBAHKAN BARIS INI AGAR ROUTER KENAL DENGAN SERVICE
const userService = require('../services/UserService'); 

const router = express.Router();

// Route standar
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user', uploadImage, userController.createUser);
router.put('/user/:id', uploadImage, userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

// SPECIAL ROUTES
router.get('/user/:id/courses', userController.getCoursesByUser);
router.get('/user/:id/badges', userController.getBadgesByUser);
router.get('/user/:id/trades', userController.getTradesByUser);
router.post('/user/purchase-avatar', userController.purchaseAvatar);
router.get('/user/:id/avatars', userController.getOwnedAvatars);

// CHALLENGE ROUTES
router.get('/user/:id/challenges', userController.getMyChallenges);
router.post('/user/claim-challenge', userController.claimChallengeReward);

// 3. Route untuk TRIGGER kemajuan challenge (Login, Materi, Kuis)
// Sekarang 'userService' di bawah ini tidak akan error lagi karena sudah di-require di atas
router.post('/user/trigger-challenge', async (req, res) => {
    const { userId, type } = req.body;
    try {
        await userService.updateChallengeProgress(userId, type);
        res.status(200).json({ message: "Progress updated" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;