-- DropIndex
DROP INDEX "clients_phone_key";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "birthdate" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(200);
