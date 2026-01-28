// services/AdaptiveService.js
const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const aggregatorService = require("./AggregatorService");

class AdaptiveService {
  async updateAndPredictUserType(userId) {
    try {
      const id = parseInt(userId);

      // 1. Ambil Vector fitur terbaru dari database log
      const vector = await aggregatorService.getFeatureVector(id);

      // 2. Prediksi ke Python ML Service
      const response = await axios.post('http://127.0.0.1:8000/predict', { vector });
      const { cluster, confidence } = response.data;

      // 3. UPDATE DATABASE: Tulis hasil prediksi ke database agar sinkron
      // Kita turunkan threshold ke 0.5 agar perubahan lebih dinamis saat testing
      if (confidence > 0.5) {
        await prisma.userAdaptiveProfile.upsert({
          where: { userId: id },
          update: {
            currentCluster: cluster,
            confidence: confidence,
            lastUpdated: new Date()
          },
          create: {
            userId: id,
            currentCluster: cluster,
            confidence: confidence
          }
        });
        console.log(`[DB-SYNC] User ${id} updated in database to: ${cluster}`);
      }
    } catch (error) {
      console.error("Gagal sinkronisasi ML ke Database:", error.message);
    }
  }
}

module.exports = new AdaptiveService();