// routes/ActivityRoute.js
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/ActivityController');
const userController = require('../controllers/UserController'); // Jika getAdaptiveProfile ada di sini

router.post("/activity/log", activityController.postLog);
router.get("/activity/vector/:id", activityController.getClassificationData);

// Pastikan endpoint ini ada agar Flutter tidak "Failed to fetch"
router.get("/user/adaptive/:id", userController.getAdaptiveProfile);

module.exports = router;