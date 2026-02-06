// services/AdaptiveService.js
const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const aggregatorService = require("./AggregatorService");

class AdaptiveService {
  async updateAndPredictUserType(userId) {
    // return(0);
    try {
      const id = parseInt(userId);
      const logCount = await prisma.userActivityLog.count({ where: { userId: id } });

      // Mendapatkan vector fitur [x1, x2, x3, x4] dari aggregator
      const vector = await aggregatorService.getFeatureVector(id);

      // STRATEGI COLD START: Jika log < 15, kunci di Disruptors
      if (logCount < 15) {
        await this.saveProfile(id, "Disruptors", 1.0, vector);
        console.log(`[COLD-START] User ${id} locked to Disruptors (Logs: ${logCount})`);
        return;
      }

      // Prediksi ML
      const response = await axios.post('http://127.0.0.1:8000/predict', { vector });
      const { cluster, confidence } = response.data;

      const currentProfile = await prisma.userAdaptiveProfile.findUnique({ where: { userId: id } });

      // STABILISASI: Hanya ganti klaster jika confidence > 0.85
      if (confidence > 0.85 || (currentProfile && currentProfile.currentCluster === cluster)) {
        await this.saveProfile(id, cluster, confidence, vector);
        console.log(`[ML-SYNC] User ${id} updated to: ${cluster} (${(confidence * 100).toFixed(1)}%)`);
      }
    } catch (e) {
      console.error("Adaptive Service Error:", e.message);
    }
  }

  // MODIFIKASI: Sekarang menerima vector untuk disimpan ke Prisma Studio
  async saveProfile(userId, cluster, confidence, vector) {
    await prisma.userAdaptiveProfile.upsert({
      where: { userId },
      update: { 
        currentCluster: cluster, 
        confidence, 
        // Menyimpan angka indeks desimal agar terlihat di database
        achieverIndex: vector[0],
        freeSpiritIndex: vector[1],
        playerIndex: vector[2],
        disruptorIndex: vector[3],
        lastUpdated: new Date() 
      },
      create: { 
        userId, 
        currentCluster: cluster, 
        confidence,
        achieverIndex: vector[0],
        freeSpiritIndex: vector[1],
        playerIndex: vector[2],
        disruptorIndex: vector[3]
      }
    });
  }
}

module.exports = new AdaptiveService();