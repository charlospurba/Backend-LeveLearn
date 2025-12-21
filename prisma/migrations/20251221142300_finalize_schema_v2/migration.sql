/*
  Warnings:

  - A unique constraint covering the columns `[userId,tradeId]` on the table `user_trades` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_trades_userId_tradeId_key" ON "user_trades"("userId", "tradeId");
