/*
  Warnings:

  - You are about to drop the column `professional_id` on the `sectors` table. All the data in the column will be lost.
  - Added the required column `sectors_id` to the `professionals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sectors" DROP CONSTRAINT "sectors_professional_id_fkey";

-- AlterTable
ALTER TABLE "professionals" ADD COLUMN     "sectors_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sectors" DROP COLUMN "professional_id";

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_sectors_id_fkey" FOREIGN KEY ("sectors_id") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
