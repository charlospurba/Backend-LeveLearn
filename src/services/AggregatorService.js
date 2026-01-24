const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AggregatorService {
  async getFeatureVector(userId) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const logs = await prisma.userActivityLog.findMany({
      where: { 
        userId: parseInt(userId),
        createdAt: { gte: thirtyDaysAgo } 
      },
      select: { type: true, value: true }
    });

    if (logs.length === 0) return [0, 0, 0, 0];

    // FITUR 1: ACHIEVERS (Butuh 50 chapter untuk skor 1.0)
    const quizLogs = logs.filter(l => l.type === 'QUIZ_SCORE');
    const completionLogs = logs.filter(l => l.type === 'COMPLETION_RATE');
    const avgQuiz = quizLogs.length > 0 
      ? (quizLogs.reduce((acc, curr) => acc + curr.value, 0) / quizLogs.length) / 100 
      : 0;
    const completionScore = Math.min(completionLogs.length / 50, 1.0); 
    const x1_achiever = (avgQuiz + completionScore) / 2;

    // FITUR 2: FREE SPIRITS (Butuh 30 eksplorasi untuk skor 1.0)
    const exploreLogs = logs.filter(l => l.type === 'EXPLORATION_EVENTS');
    const durationLogs = logs.filter(l => l.type === 'SESSION_DURATION');
    const explorationScore = Math.min(exploreLogs.length / 30, 1.0);
    const avgDuration = durationLogs.length > 0
      ? Math.min((durationLogs.reduce((acc, curr) => acc + curr.value, 0) / durationLogs.length) / 1200, 1.0)
      : 0;
    const x2_free_spirit = (explorationScore + avgDuration) / 2;

    // FITUR 3: PLAYERS (Butuh 100 aksi grinding untuk skor 1.0)
    const accessLogs = logs.filter(l => l.type === 'FREQUENT_ACCESS');
    const rewardLogs = logs.filter(l => l.type === 'REWARD_BEHAVIOR_PROXY');
    const x3_player = Math.min((accessLogs.length + rewardLogs.length) / 100, 1.0);

    // FITUR 4: DISRUPTORS (Butuh 20 pola anomali untuk skor 1.0)
    const anomalyLogs = logs.filter(l => l.type === 'ANOMALY_PATTERNS');
    const x4_disruptor = Math.min(anomalyLogs.length / 20, 1.0);

    return [
      parseFloat(x1_achiever.toFixed(2)),
      parseFloat(x2_free_spirit.toFixed(2)),
      parseFloat(x3_player.toFixed(2)),
      parseFloat(x4_disruptor.toFixed(2))
    ];
  }
}

module.exports = new AggregatorService();