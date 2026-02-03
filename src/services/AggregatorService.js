// services/AggregatorService.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AggregatorService {
  async getFeatureVector(userId) {
    const logs = await prisma.userActivityLog.findMany({
      where: { userId: parseInt(userId) },
      select: { type: true, value: true }
    });

    // Jika tidak ada data, kembalikan vektor nol
    if (logs.length === 0) return [0, 0, 0, 0];

    // --- ACHIEVERS (Threshold: 100 Chapter) ---
    const quizLogs = logs.filter(l => l.type === 'QUIZ_SCORE');
    const completionLogs = logs.filter(l => l.type === 'COMPLETION_RATE');
    
    const avgQuiz = quizLogs.length > 0 
      ? (quizLogs.reduce((acc, curr) => acc + curr.value, 0) / quizLogs.length) / 100 
      : 0;
    const completionScore = Math.min(completionLogs.length / 100, 1.0); 
    const x1 = (avgQuiz * 0.7) + (completionScore * 0.3);

    // --- FREE SPIRITS (Threshold: 150 Klik / 30 Menit) ---
    const exploreLogs = logs.filter(l => l.type === 'EXPLORATION_EVENTS');
    const durationLogs = logs.filter(l => l.type === 'SESSION_DURATION');
    
    const explorationScore = Math.min(exploreLogs.length / 150, 1.0);
    const avgDuration = durationLogs.length > 0
      ? Math.min((durationLogs.reduce((acc, curr) => acc + curr.value, 0) / durationLogs.length) / 1800, 1.0)
      : 0;
    const x2 = (explorationScore + avgDuration) / 2;

    // --- PLAYERS (Threshold: 200 Aksi) ---
    const accessLogs = logs.filter(l => l.type === 'FREQUENT_ACCESS');
    const rewardLogs = logs.filter(l => l.type === 'REWARD_BEHAVIOR_PROXY');
    const x3 = Math.min((accessLogs.length + rewardLogs.length) / 200, 1.0);

    // --- DISRUPTORS (Threshold: 50 Anomali) ---
    const anomalyLogs = logs.filter(l => l.type === 'ANOMALY_PATTERNS');
    const x4 = Math.min(anomalyLogs.length / 50, 1.0);

    // Mengembalikan array float dengan presisi 3 desimal
    return [x1, x2, x3, x4].map(v => parseFloat(Math.min(v, 1.0).toFixed(3)));
  }
}

module.exports = new AggregatorService();