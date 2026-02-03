-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'REWARD';

-- AlterTable
ALTER TABLE "user_trades" ADD COLUMN     "isEquipped" BOOLEAN NOT NULL DEFAULT false;
