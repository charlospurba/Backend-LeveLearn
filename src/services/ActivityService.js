const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ActivityService {
async recordLog(userId, type, value, metadata = {}) {
    try {
      return await prisma.userActivityLog.create({
        data: {
          userId: parseInt(userId) || 0,
          type: type || "UNKNOWN",
          value: parseFloat(value) || 0.0, 
          metadata: metadata,
        },
      });
    } catch (error) {
      console.error("Error recording activity log:", error);
      throw error;
    }
  }

  // Fungsi pembantu untuk mengambil rangkuman log (berguna untuk ML nantinya)
  async getUserStatsForML(userId) {
    return await prisma.userActivityLog.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: 'desc' },
      take: 100 
    });
  }
}

module.exports = new ActivityService();