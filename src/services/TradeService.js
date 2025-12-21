const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllTrades = async () => {
    try {
        return await prisma.trade.findMany({
            orderBy: { id: 'asc' }
        }); 
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createTrade = async (newData) => {
    try {
        // Cari ID tertinggi untuk menentukan ID berikutnya secara manual
        const lastTrade = await prisma.trade.findFirst({
            orderBy: { id: 'desc' },
            select: { id: true }
        });

        const nextId = lastTrade ? lastTrade.id + 1 : 1;
        const { id, ...dataToSave } = newData;

        // Gunakan return agar controller menerima objek hasil create
        return await prisma.trade.create({
            data: {
                ...dataToSave,
                id: nextId
            }
        });
    } catch (error) {
        throw error; // Lempar error asli agar ditangkap controller
    }
};

exports.updateTrade = async(id, updateData) => {
    try {
        // Memastikan ID tidak ikut diubah saat proses update
        const { id: _, ...cleanData } = updateData;
        return await prisma.trade.update({
            where: { id },      
            data: cleanData,     
        });
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteTrade = async(id) => {
    try {
        // Menghapus data di tabel trades
        // Tabel user_trades akan ikut terhapus jika onDelete: Cascade aktif di Prisma
        await prisma.trade.delete({ where: { id } });
        return `Successfully deleted trade with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting trade: ' + error.message); 
    }
}

// SPECIAL SERVICES

exports.getTradesByCourse = async(courseId) => {
    try {
        const trade = await prisma.trade.findMany({
            where: {
                courseId: parseInt(courseId)
            }
        });
        return trade;
    } catch (error) {
        throw new Error(error.message);
    }
}