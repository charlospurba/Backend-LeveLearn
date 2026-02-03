-- AlterTable
ALTER TABLE "trades" ADD COLUMN     "priceInPoints" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "requiredBadgeType" DROP NOT NULL;
