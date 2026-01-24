const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AggregatorService {
  async getFeatureVector(userId) {
    // 1. OPTIMASI: Hanya ambil field yang diperlukan dan batasi rentang waktu (misal 30 hari terakhir)
    // Ini mengurangi beban RAM Node.js secara signifikan
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const logs = await prisma.userActivityLog.findMany({
      where: { 
        userId: parseInt(userId),
        createdAt: { gte: thirtyDaysAgo } // Hanya proses data relevan terbaru
      },
      select: {
        type: true,
        value: true
      }
    });

    if (logs.length === 0) return [0, 0, 0, 0];

    // --- PROSES AGREGASI (In-Memory Filtering) ---

    // FITUR 1: ACHIEVERS (Mastery Index)
    const quizLogs = logs.filter(l => l.type === 'QUIZ_SCORE');
    const completionLogs = logs.filter(l => l.type === 'COMPLETION_RATE');
    
    const avgQuiz = quizLogs.length > 0 
      ? (quizLogs.reduce((acc, curr) => acc + curr.value, 0) / quizLogs.length) / 100 
      : 0;
    const completionScore = Math.min(completionLogs.length / 10, 1.0);
    const x1_achiever = (avgQuiz + completionScore) / 2;

    // FITUR 2: FREE SPIRITS (Freedom Index)
    const exploreLogs = logs.filter(l => l.type === 'EXPLORATION_EVENTS');
    const durationLogs = logs.filter(l => l.type === 'SESSION_DURATION');
    
    const explorationScore = Math.min(exploreLogs.length / 5, 1.0);
    const avgDuration = durationLogs.length > 0
      ? Math.min((durationLogs.reduce((acc, curr) => acc + curr.value, 0) / durationLogs.length) / 600, 1.0)
      : 0;
    const x2_free_spirit = (explorationScore + avgDuration) / 2;

    // FITUR 3: PLAYERS (Grinding Index)
    const accessLogs = logs.filter(l => l.type === 'FREQUENT_ACCESS');
    const rewardLogs = logs.filter(l => l.type === 'REWARD_BEHAVIOR_PROXY');
    
    const x3_player = Math.min((accessLogs.length + rewardLogs.length) / 20, 1.0);

    // FITUR 4: DISRUPTORS (Anomaly Index)
    const anomalyLogs = logs.filter(l => l.type === 'ANOMALY_PATTERNS');
    const x4_disruptor = Math.min(anomalyLogs.length / 5, 1.0);

    // Output Feature Vector (x1, x2, x3, x4)
    return [
      parseFloat(x1_achiever.toFixed(2)),
      parseFloat(x2_free_spirit.toFixed(2)),
      parseFloat(x3_player.toFixed(2)),
      parseFloat(x4_disruptor.toFixed(2))
    ];
  }
}

module.exports = new AggregatorService();