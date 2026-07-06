const express = require('express');
const userController = require('../controllers/UserController');
const { uploadImage } = require('../middlewares/FileUpload');

const userService = require('../services/UserService'); 

const router = express.Router();

router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user', uploadImage, userController.createUser);
router.put('/user/:id', uploadImage, userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

router.get('/user/:id/courses', userController.getCoursesByUser);
router.get('/user/:id/badges', userController.getBadgesByUser);
router.get('/user/:id/trades', userController.getTradesByUser);
router.post('/user/purchase-avatar', userController.purchaseAvatar);
router.get('/user/:id/avatars', userController.getOwnedAvatars);

router.get('/user/:id/challenges', userController.getMyChallenges);
router.post('/user/claim-challenge', userController.claimChallengeReward);
router.get("/user/adaptive/:id", userController.getAdaptiveProfile);

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