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

const buyShopItem = async (req, res) => {
    const { userId, tradeId } = req.body; // Client hanya kirim ID
    
    try {
        await prisma.$transaction(async (tx) => {
            // 1. Ambil data trade dari DB untuk mendapatkan harga asli
            const trade = await tx.trade.findUnique({ where: { id: parseInt(tradeId) } });
            if (!trade) throw new Error("Item tidak ditemukan");

            const price = trade.priceInPoints;
            const user = await tx.user.findUnique({ where: { id: parseInt(userId) } });

            // 2. Validasi saldo user
            if (!user || (user.points || 0) < price) {
                throw new Error(`Poin tidak cukup. Butuh ${price} Poin.`);
            }

            // 3. Potong poin user
            await tx.user.update({
                where: { id: user.id },
                data: { points: { decrement: price } }
            });

            // 4. Catat kepemilikan item
            await tx.userTrade.create({
                data: { 
                    userId: user.id, 
                    tradeId: trade.id,
                    isEquipped: false 
                }
            });
        });

        res.status(200).json({ success: true, message: "Pembelian berhasil!" });
    } catch (error) {
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
    const uId = parseInt(userId);
    const tId = parseInt(tradeId);

    try {
        await prisma.$transaction(async (tx) => {
            // 1. Matikan semua frame yang aktif untuk user ini
            await tx.userTrade.updateMany({
                where: { 
                    userId: uId, 
                    trade: { category: "FRAME" } 
                },
                data: { isEquipped: false }
            });

            // 2. Aktifkan frame yang dipilih
            await tx.userTrade.update({
                where: { 
                    userId_tradeId: { userId: uId, tradeId: tId } 
                },
                data: { isEquipped: true }
            });

            // CATATAN: Bagian update tx.user dihapus karena kolomnya tidak ada di database Anda
        });

        res.status(200).json({ success: true, message: "Berhasil dipasang di tabel relasi!" });
    } catch (error) {
        console.error("Equip Error:", error.message);
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