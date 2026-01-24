// controllers/ActivityController.js
const activityService = require("../services/ActivityService");
const aggregatorService = require("../services/AggregatorService");
const adaptiveService = require("../services/AdaptiveService"); // <--- WAJIB TAMBAHKAN INI

const postLog = async (req, res) => {
    try {
        // Gunakan destructuring agar data yang dikirim ke service benar
        const { userId, type, value, metadata } = req.body;

        const log = await activityService.recordLog(userId, type, value, metadata);
        
        // Pemicu ML Service (Non-blocking)
        // Sekarang adaptiveService sudah terdefinisi
        adaptiveService.updateAndPredictUserType(userId).catch(err => 
            console.error("ML Background Error:", err.message)
        );

        res.status(201).json({ status: "success", data: log });
    } catch (error) {
        console.error("Post Log Error:", error.message);
        res.status(500).json({ status: "error", message: error.message });
    }
};

const getClassificationData = async (req, res) => {
    try {
        const userId = req.params.id;
        const vector = await aggregatorService.getFeatureVector(userId);
        
        res.json({
            status: "success",
            userId: userId,
            featureVector: vector, 
            description: [
        "Achiever_Index (Quiz & Completion)",
        "FreeSpirit_Index (Exploration & Duration)",
        "Player_Index (Access & Reward)",
        "Disruptor_Index (Anomaly)"
            ]
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { postLog, getClassificationData };