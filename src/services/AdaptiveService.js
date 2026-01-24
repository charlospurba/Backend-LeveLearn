const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const aggregatorService = require("./AggregatorService");

class AdaptiveService {
  async updateAndPredictUserType(userId) {
    try {
      const vector = await aggregatorService.getFeatureVector(userId);

      // Pastikan ML Service Python sudah running
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        vector: vector
      });

      const { cluster, confidence } = response.data;

      // MEKANISME SMOOTHING: Hanya update jika ML sangat yakin (> 0.7)
      // Ini mencegah user berganti tipe hanya karena satu aksi kecil
      if (confidence > 0.7) {
        const profile = await prisma.userAdaptiveProfile.upsert({
          where: { userId: parseInt(userId) },
          update: {
            currentCluster: cluster,
            confidence: confidence,
            lastUpdated: new Date()
          },
          create: {
            userId: parseInt(userId),
            currentCluster: cluster,
            confidence: confidence
          }
        });
        console.log(`Update Stabil: User ${userId} -> ${cluster} (${(confidence * 100).toFixed(2)}%)`);
        return profile;
      } else {
        console.log(`Perubahan diabaikan: Confidence ${cluster} hanya ${(confidence * 100).toFixed(2)}%`);
        return null;
      }

    } catch (error) {
      console.error("Gagal prediksi ML:", error.message);
      return null;
    }
  }
}

module.exports = new AdaptiveService();