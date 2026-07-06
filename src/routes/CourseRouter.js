const express = require('express');
const courseController = require('../controllers/CourseController');

const router = express.Router();

router.get('/course', courseController.getAllCourses);

router.get('/course/:id', courseController.getCourseById);

router.post('/course', courseController.createCourse);

router.put('/course/:id', courseController.updateCourse);

router.delete('/course/:id', courseController.deleteCourse);

router.get('/course/:id/chapters', courseController.getChapterByCourse);

router.get('/course/:id/users', courseController.getUsersByCourse);

router.get('/course/:id/badges', courseController.getBadgesByCourse);

module.exports = router;
