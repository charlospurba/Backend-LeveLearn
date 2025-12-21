const express = require('express');
// @ts-ignore
const userController = require('../controllers/UserController');
const { uploadImage } = require('../middlewares/FileUpload');

const router = express.Router();

// Route for get all users
router.get('/user', userController.getAllUsers);

// Route for get user by id
router.get('/user/:id', userController.getUserById);

// Router for create user
router.post('/user', uploadImage, userController.createUser);

// Router for update user by id
router.put('/user/:id', uploadImage, userController.updateUser);

// Router for delete user by id
router.delete('/user/:id', userController.deleteUser);

// SPECIAL ROUTES

// Get Courses by User
router.get('/user/:id/courses', userController.getCoursesByUser);

// Get Badges by User
router.get('/user/:id/badges', userController.getBadgesByUser);

// Get Trades by User
router.get('/user/:id/trades', userController.getTradesByUser);

// RUTE BARU UNTUK SHOP AVATAR
// Dipanggil oleh: UserService.savePurchasedAvatarToDb
router.post('/user/purchase-avatar', userController.purchaseAvatar);

// Dipanggil oleh: UserService.getPurchasedAvatarsFromDb
router.get('/user/:id/avatars', userController.getOwnedAvatars);

module.exports = router;
