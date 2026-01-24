const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const aggregatorService = require("./AggregatorService");

class AdaptiveService {
  async updateAndPredictUserType(userId) {
    try {
      const id = parseInt(userId);
      
      // 1. Cek Cooldown (Misal: 30 menit) agar server tidak kerja terus-menerus
      const existing = await prisma.userAdaptiveProfile.findUnique({ where: { userId: id } });
      if (existing && (new Date() - new Date(existing.lastUpdated)) < 30 * 60 * 1000) {
        return; 
      }

      // 2. Ambil Vector & Prediksi ke Python
      const vector = await aggregatorService.getFeatureVector(id);
      const response = await axios.post('http://127.0.0.1:8000/predict', { vector });
      
      const { cluster, confidence } = response.data;

      // 3. Simpan jika di atas threshold
      if (confidence > 0.8) {
        await prisma.userAdaptiveProfile.upsert({
          where: { userId: id },
          update: { currentCluster: cluster, confidence, lastUpdated: new Date() },
          create: { userId: id, currentCluster: cluster, confidence }
        });
        console.log(`[ML Background] User ${id} updated to ${cluster}`);
      }
    } catch (error) {
      console.error("ML Background Error:", error.message);
    }
  }
}

module.exports = new AdaptiveService();