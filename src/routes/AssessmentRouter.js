const express = require('express');
const assessmentController = require('../controllers/AssessmentController');

const router = express.Router();

router.get('/assessment', assessmentController.getAllAssessments);
router.get('/assessment/:id', assessmentController.getAssessmentById);
router.post('/assessment', assessmentController.createAssessment);
router.put('/assessment/:id', assessmentController.updateAssessment);
router.delete('/assessment/:id', assessmentController.deleteAssessment);
module.exports = router;
