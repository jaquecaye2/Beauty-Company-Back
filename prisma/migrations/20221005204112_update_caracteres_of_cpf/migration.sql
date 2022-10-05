-- DropIndex
DROP INDEX "professionals_phone_key";

-- AlterTable
ALTER TABLE "professionals" ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(20);
