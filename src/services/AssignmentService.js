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

/**
 * Fungsi Submit Assignment yang diperbaiki untuk membuka Chapter selanjutnya.
 * Sangat krusial untuk profil Disruptors agar alur belajar tidak terhenti.
 */
exports.submitAssignment = async (statusId, newFileUrl) => {
    try {
        // 1. Ambil data UserChapter untuk mendapatkan userId, courseId, dan level saat ini
        const current = await prisma.userChapter.findUnique({
            where: { id: statusId },
            include: { 
                chapter: true // Digunakan untuk mendapatkan courseId dan level chapter tersebut
            }
        });

        if (!current) throw new Error("Status chapter tidak ditemukan");

        // 2. Olah riwayat pengiriman (Submission History)
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

        // Masukkan data baru ke urutan teratas
        history.unshift(newFileUrl);

        // 3. TRANSACTION: Menjamin atomisitas (kedua tabel harus sukses update bersamaan)
        return await prisma.$transaction(async (tx) => {
            
            // A. Update status chapter spesifik user
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

            // B. Cari data progres kursus (UserCourse)
            const userCourse = await tx.userCourse.findUnique({
                where: {
                    userId_courseId: {
                        userId: current.userId,
                        courseId: current.chapter.courseId,
                    }
                }
            });

            // C. LOGIKA PEMBUKAAN LEVEL: 
            // Update currentChapter hanya jika chapter yang baru diselesaikan 
            // setara dengan currentChapter yang sedang aktif.
            if (userCourse && current.chapter.level === userCourse.currentChapter) {
                await tx.userCourse.update({
                    where: { id: userCourse.id },
                    data: {
                        currentChapter: { increment: 1 },
                        // Update progres (persentase) bisa disesuaikan dengan total chapter
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