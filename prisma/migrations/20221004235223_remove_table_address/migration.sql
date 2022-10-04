/*
  Warnings:

  - You are about to drop the column `address_id` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `address_id` on the `professionals` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `professionals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_address_id_fkey";

-- DropForeignKey
ALTER TABLE "professionals" DROP CONSTRAINT "professionals_address_id_fkey";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "address_id",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "professionals" DROP COLUMN "address_id",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- DropTable
DROP TABLE "address";
