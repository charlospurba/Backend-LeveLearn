const express = require('express');
const friendsController = require('../controllers/FriendsController');

const router = express.Router();

/**
 * NOTE: 
 * Multer dihapus dari route POST /friends/posts karena 
 * file sekarang di-upload ke Supabase langsung dari Flutter.
 * Backend hanya menerima Public URL-nya saja.
 */

// Route untuk mengambil semua postingan
router.get('/friends/posts', friendsController.getPosts);

// Route untuk membuat postingan (Menerima JSON: userId, content, fileUrl, fileName)
router.post('/friends/posts', friendsController.createPost);

// Route untuk Like
router.post('/friends/like', friendsController.handleLike);

// Route untuk Komentar
router.post('/friends/comment', friendsController.handleComment);

module.exports = router;