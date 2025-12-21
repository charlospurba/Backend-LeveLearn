const tradeService = require('../services/TradeService');

const getAllTrades = async (req, res) => {
    try {
        const trades = await tradeService.getAllTrades();
        res.status(200).json(trades);
        console.log(`getAllTrades successfully requested`);
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
        res.status(500).json({ message: `Failed to get trade with id ${ id }` })
    }
}

const createTrade = async (req, res) => {
    try {
        const newData = req.body;
        if (!newData.title) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        const trade = await tradeService.createTrade(newData);

        console.log(`[SUCCESS] Trade created in DB with ID: ${trade.id}`);

        // PERBAIKAN: Gunakan return agar respon benar-benar terkirim dan koneksi tidak gantung
        return res.status(200).json({
            success: true,
            message: "Successfully created",
            data: trade, 
            trade: trade 
        });

    } catch (error) {
        console.error("Controller Error:", error.message);
        return res.status(500).json({ 
            success: false, 
            message: "Failed to create new trade", 
            error: error.message 
        });
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

module.exports = {
    getAllTrades,
    getTradeById,
    createTrade,
    updateTrade,
    deleteTrade
};