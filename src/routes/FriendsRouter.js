const express = require('express');
const friendsController = require('../controllers/FriendsController');

const router = express.Router();

router.get('/friends/posts', friendsController.getPosts);

router.post('/friends/posts', friendsController.createPost);

router.post('/friends/like', friendsController.handleLike);

router.post('/friends/comment', friendsController.handleComment);

router.put('/friends/posts/:id', friendsController.updatePost); // Untuk Edit
router.delete('/friends/posts/:id', friendsController.deletePost);

module.exports = router;