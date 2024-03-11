/*
  Warnings:

  - Made the column `employeeDataId` on table `Attendance` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Attendance` DROP FOREIGN KEY `Attendance_employeeDataId_fkey`;

-- DropForeignKey
ALTER TABLE `Deduction` DROP FOREIGN KEY `Deduction_employeeDataId_fkey`;

-- AlterTable
ALTER TABLE `Attendance` MODIFY `employeeDataId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Deduction` MODIFY `employeeDataId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`employee_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deduction` ADD CONSTRAINT `Deduction_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`employee_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
