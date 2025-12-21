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

exports.getTradeById = async (id) => {
    try {
        return await prisma.trade.findUnique({
            where: { id }
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createTrade = async (newData) => {
    try {
        // PERBAIKAN: Jangan tentukan ID secara manual. Biarkan autoincrement.
        const { id, ...dataToSave } = newData;

        return await prisma.trade.create({
            data: dataToSave
        });
    } catch (error) {
        throw new Error("Gagal membuat item trade: " + error.message);
    }
};

exports.updateTrade = async(id, updateData) => {
    try {
        const { id: _, ...cleanData } = updateData;
        return await prisma.trade.update({
            where: { id },      
            data: cleanData,     
        });
    } catch (error) {
        throw new Error(error.message);  
    }
};

exports.deleteTrade = async(id) => {
    try {
        await prisma.trade.delete({ where: { id } });
        return { message: `Trade item with id ${id} successfully deleted` };
    } catch (error) {
        throw new Error('Error deleting trade: ' + error.message); 
    }
};

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
};