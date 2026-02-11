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
            where: {
                id
            },
        });
        return assignment;
    } catch (error) {
        throw new Error(`Error retrieving assignment with id ${id}`);
    }
}

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
}

exports.deleteAssignment = async(id) => {
    try {
        await prisma.assignment.delete({
            where: { id },
        });
        return `Successfully deleted assignment with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting assignment: ' + error.message); 
    }
}

exports.submitAssignment = async (statusId, newFileUrl) => {
    try {
        // 1. Ambil data saat ini
        const current = await prisma.userChapter.findUnique({
            where: { id: statusId },
            select: { submissionHistory: true }
        });

        if (!current) throw new Error("Status chapter tidak ditemukan");

        // 2. Pastikan history adalah Array (PENTING)
        let history = [];
        
        if (current.submissionHistory) {
            // Jika data tersimpan sebagai string JSON di DB (tergantung setup DB)
            if (typeof current.submissionHistory === 'string') {
                try {
                    history = JSON.parse(current.submissionHistory);
                } catch (e) {
                    history = []; // Reset jika parse gagal
                }
            } else if (Array.isArray(current.submissionHistory)) {
                history = current.submissionHistory;
            }
        }

        // 3. Masukkan data baru ke urutan teratas
        history.unshift(newFileUrl);

        // 4. Update database
        return await prisma.userChapter.update({
            where: { id: statusId },
            data: {
                submission: newFileUrl,
                submissionHistory: history, // Prisma akan otomatis mengonversi ke tipe Json di DB
                assignmentDone: true,
                isCompleted: true,
                timeFinished: new Date(),
            },
        });
    } catch (error) {
        throw new Error("Gagal memperbarui riwayat tugas: " + error.message);
    }
};