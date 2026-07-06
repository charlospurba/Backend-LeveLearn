const express = require('express');
const router = express.Router();
const activityController = require('../controllers/ActivityController');
const userController = require('../controllers/UserController'); 

router.post("/activity/log", activityController.postLog);
router.get("/activity/vector/:id", activityController.getClassificationData);

router.get("/user/adaptive/:id", userController.getAdaptiveProfile);

module.exports = router;