const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAssignments = async () => {
    try {
        const assignments = await prisma.assignment.findMany(); 
        return assignments;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAssignmentById = async (id) => {
    try {
        const assignment = await prisma.assignment.findUnique({
            where: { id },
        });
        return assignment;
    } catch (error) {
        throw new Error(`Error retrieving assignment with id ${id}`);
    }
};

exports.createAssignment = async (newData) => {
    try {
        const newAssignment = await prisma.assignment.create({
            data: newData
        });
        return newAssignment;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateAssignment = async(id, updateData) => {
    try {
        const assignment = await prisma.assignment.update({
            where: { id },      
            data: updateData,     
        });
        return assignment;  
    } catch (error) {
        throw new Error(error.message);  
    }
};

exports.deleteAssignment = async(id) => {
    try {
        await prisma.assignment.delete({
            where: { id },
        });
        return `Successfully deleted assignment with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting assignment: ' + error.message); 
    }
};

exports.submitAssignment = async (statusId, newFileUrl) => {
    try {
        const current = await prisma.userChapter.findUnique({
            where: { id: statusId },
            include: { 
                chapter: true 
            }
        });

        if (!current) throw new Error("Status chapter tidak ditemukan");

        let history = [];
        if (current.submissionHistory) {
            if (typeof current.submissionHistory === 'string') {
                try {
                    history = JSON.parse(current.submissionHistory);
                } catch (e) {
                    history = [];
                }
            } else if (Array.isArray(current.submissionHistory)) {
                history = current.submissionHistory;
            }
        }
        history.unshift(newFileUrl);

        return await prisma.$transaction(async (tx) => {
            
            const updatedUserChapter = await tx.userChapter.update({
                where: { id: statusId },
                data: {
                    submission: newFileUrl,
                    submissionHistory: history,
                    assignmentDone: true,
                    isCompleted: true,
                    timeFinished: new Date(),
                },
            });

            const userCourse = await tx.userCourse.findUnique({
                where: {
                    userId_courseId: {
                        userId: current.userId,
                        courseId: current.chapter.courseId,
                    }
                }
            });

            if (userCourse && current.chapter.level === userCourse.currentChapter) {
                await tx.userCourse.update({
                    where: { id: userCourse.id },
                    data: {
                        currentChapter: { increment: 1 },
                        progress: Math.min(Math.round((current.chapter.level / 10) * 100), 100) 
                    },
                });
            }

            return updatedUserChapter;
        });
    } catch (error) {
        throw new Error("Gagal memperbarui progres tugas dan level: " + error.message);
    }
};