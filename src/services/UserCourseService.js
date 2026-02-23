const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUserCourses = async () => {
  try {
    const userCourses = await prisma.userCourse.findMany();
    return userCourses;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserCourseById = async (id) => {
  try {
    const userCourse = await prisma.userCourse.findUnique({
      where: {
        id,
      },
    });
    return userCourse;
  } catch (error) {
    throw new Error(`Error retrieving userCourse with id ${id}`);
  }
};

exports.createUserCourse = async (newData) => {
  try {
    const newUserCourse = await prisma.userCourse.create({
      data: newData,
    });
    return newUserCourse;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUserCourse = async (id, updateData) => {
  try {
    const userCourse = await prisma.userCourse.update({
      where: { id },
      data: updateData,
    });
    return userCourse;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteUserCourse = async (id) => {
  try {
    await prisma.userCourse.delete({
      where: { id },
    });
    return `Successfully deleted userCourse with id: ${id}`;
  } catch (error) {
    throw new Error("Error deleting userCourse: " + error.message);
  }
};

// SPECIAL SERVICES

exports.getUsersByCourse = async (courseId) => {
  try {
    const user = await prisma.userCourse.findMany({
      where: {
        courseId: parseInt(courseId),
      },
      select: {
        user: true,
      },
    });

    if (!user.length) {
      throw new Error(`No user found for course with id ${courseId}`);
    }

    return user.map((item) => item.user);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getCoursesByUser = async (userId) => {
  try {
    const userCourses = await prisma.userCourse.findMany({
      where: {
        userId: parseInt(userId),
      },
      select: {
        progress: true,
        course: {
          select: {
            id: true,
            code: true,
            name: true,
            image: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!userCourses.length) {
      throw new Error(`No course found for user with id ${userId}`);
    }

    // MODIFIKASI: Menambahkan pengecekan status penilaian tugas per kursus
    const result = await Promise.all(userCourses.map(async (userCourse) => {
      const ungradedCount = await prisma.userChapter.count({
        where: {
          userId: parseInt(userId),
          chapter: {
            courseId: userCourse.course.id,
            assignments: { some: {} } // Hanya menghitung chapter yang memiliki assignment
          },
          assignmentScore: 0 // Asumsi nilai 0 berarti instruktur belum memberikan penilaian
        }
      });

      return {
        course: {
          ...userCourse.course,
          isAllAssignmentsGraded: ungradedCount === 0 
        },
        progress: userCourse.progress,
      };
    }));

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserCourseByUserByCourse = async (userId, courseId) => {
  try {
    const userCourse = await prisma.userCourse.findMany({
      where: {
        userId,
        courseId,
      },
    });
    return userCourse;
  } catch (error) {
    throw new Error(error.message);
  }
};