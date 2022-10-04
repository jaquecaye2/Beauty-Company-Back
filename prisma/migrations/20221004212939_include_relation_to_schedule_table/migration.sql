/*
  Warnings:

  - Added the required column `clients_id` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professionals_id` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `services_id` to the `schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "schedule" ADD COLUMN     "clients_id" INTEGER NOT NULL,
ADD COLUMN     "professionals_id" INTEGER NOT NULL,
ADD COLUMN     "services_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_clients_id_fkey" FOREIGN KEY ("clients_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professionals_id_fkey" FOREIGN KEY ("professionals_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_services_id_fkey" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
