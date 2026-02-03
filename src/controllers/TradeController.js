const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const tradeService = require('../services/TradeService');

const getAllTrades = async (req, res) => {
    try {
        const trades = await tradeService.getAllTrades();
        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({ message: "Failed to get trades", detail: error.message });
    }
};

const getTradeById = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        const trade = await tradeService.getTradeById(id);
        res.status(200).json(trade);
    } catch (error) {
        res.status(500).json({ message: `Failed to get trade with id ${ id }` });
    }
};

const createTrade = async (req, res) => {
    try {
        const newData = req.body;
        if (!newData.title) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }
        const trade = await tradeService.createTrade(newData);
        return res.status(200).json({
            success: true,
            message: "Successfully created",
            trade: trade 
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const updateTrade = async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    try {
        const updated = await tradeService.updateTrade(id, updateData);
        res.status(200).json({message: "Successfully updated trade", trade: updated});
    } catch (error) {
        res.status(500).json({ message: "Failed to update trade", detail: error.message });
    }
};

const deleteTrade = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await tradeService.deleteTrade(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete trade' });
    }
};

// --- FUNGSI TRANSAKSI PEMBELIAN ---
const buyShopItem = async (req, res) => {
    const { userId, tradeId, price } = req.body;
    try {
        await prisma.$transaction(async (tx) => {
            // 1. Validasi saldo user
            const user = await tx.user.findUnique({ where: { id: parseInt(userId) } });
            if (!user || (user.points || 0) < price) {
                throw new Error("Poin tidak mencukupi atau user tidak ditemukan");
            }

            // 2. Potong poin user
            await tx.user.update({
                where: { id: parseInt(userId) },
                data: { points: { decrement: parseInt(price) } }
            });

            // 3. Catat kepemilikan item (Mencegah duplikasi otomatis karena @@unique di schema)
            await tx.userTrade.create({
                data: { 
                    userId: parseInt(userId), 
                    tradeId: parseInt(tradeId) 
                }
            });
        });
        res.status(200).json({ success: true, message: "Purchase successful" });
    } catch (error) {
        console.error("Purchase Error:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};

const getEquippedFrame = async (req, res) => {
    const userId = parseInt(req.params.userId);
    try {
        const equipped = await prisma.userTrade.findFirst({
            where: { 
                userId: userId, 
                isEquipped: true,
                trade: { category: "FRAME" }
            },
            include: { trade: true }
        });
        res.status(200).json(equipped);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const equipFrame = async (req, res) => {
    const { userId, tradeId } = req.body;
    try {
        await prisma.$transaction([
            prisma.userTrade.updateMany({
                where: { userId: parseInt(userId), trade: { category: "FRAME" } },
                data: { isEquipped: false }
            }),
            prisma.userTrade.update({
                where: { userId_tradeId: { userId: parseInt(userId), tradeId: parseInt(tradeId) } },
                data: { isEquipped: true }
            })
        ]);
        res.status(200).json({ success: true, message: "Bingkai berhasil dipasang!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAllTrades,
    getTradeById,
    createTrade,
    updateTrade,
    deleteTrade,
    buyShopItem,
    getEquippedFrame,
    equipFrame
};