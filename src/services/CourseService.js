const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Modifikasi: Menambahkan parameter userId untuk mengecek status progress & grading
exports.getAllCourses = async (userId = null) => {
    try {
        const courses = await prisma.course.findMany({
            include: {
                chapters: {
                    include: {
                        assignments: true,
                        // Ambil progress user spesifik untuk setiap chapter
                        userProgress: userId ? { where: { userId: parseInt(userId) } } : false
                    }
                }
            }
        });

        // Jika userId ada, tambahkan logika isGraded untuk setiap course
        if (userId) {
            return courses.map(course => {
                // 1. Ambil semua chapter yang punya assignment
                const chaptersWithAssignments = course.chapters.filter(ch => ch.assignments.length > 0);

                // 2. Cek apakah SEMUA chapter tersebut sudah diberi nilai > 0
                const isGraded = chaptersWithAssignments.length > 0 
                    ? chaptersWithAssignments.every(ch => {
                        const progress = ch.userProgress[0];
                        return progress && progress.assignmentScore > 0;
                      })
                    : true; // Jika tidak ada assignment, otomatis true

                return {
                    ...course,
                    isGraded
                };
            });
        }

        return courses;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getCourseById = async (id, userId = null) => {
    try {
        const course = await prisma.course.findUnique({
            where: { id: parseInt(id) },
            include: {
                chapters: {
                    include: {
                        assignments: true,
                        userProgress: userId ? { where: { userId: parseInt(userId) } } : false
                    }
                }
            }
        });

        if (!course) throw new Error(`Course with id ${id} not found`);

        if (userId) {
            const chaptersWithAssignments = course.chapters.filter(ch => ch.assignments.length > 0);
            const isGraded = chaptersWithAssignments.length > 0 
                ? chaptersWithAssignments.every(ch => {
                    const progress = ch.userProgress[0];
                    return progress && progress.assignmentScore > 0;
                  })
                : true;
            
            return { ...course, isGraded };
        }

        return course;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createCourse = async (newData) => {
    try {
        const newCourse = await prisma.course.create({
            data: newData,
        });
        return newCourse;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateCourse = async (id, updateData) => {
    try {
        const course = await prisma.course.update({
            where: { id: parseInt(id) },
            data: updateData,
        });
        return course;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteCourse = async (id) => {
    try {
        await prisma.course.delete({
            where: { id: parseInt(id) },
        });
        return "Success deleting course";
    } catch (error) {
        throw new Error('Error deleting course: ' + error.message);
    }
};

// Special Services

exports.getChapterByCourse = async (id) => {
    try {
        const chapters = await prisma.chapter.findMany({
            where: {
                courseId: parseInt(id)
            },
            include: {
                materials: true,
                assignments: true,
                assessments: true
            }
        });

        return chapters;
    } catch (error) {
        throw new Error(error.message);
    }
};