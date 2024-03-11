-- DropForeignKey
ALTER TABLE `Attendance` DROP FOREIGN KEY `Attendance_employeeDataId_fkey`;

-- AlterTable
ALTER TABLE `Attendance` MODIFY `employeeDataId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE;
