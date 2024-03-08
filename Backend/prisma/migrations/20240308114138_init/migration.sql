/*
  Warnings:

  - You are about to drop the column `employeeDataId` on the `Job` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Job` DROP FOREIGN KEY `Job_employeeDataId_fkey`;

-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `jobdataid` INTEGER NULL;

-- AlterTable
ALTER TABLE `Job` DROP COLUMN `employeeDataId`;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_jobdataid_fkey` FOREIGN KEY (`jobdataid`) REFERENCES `Job`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
