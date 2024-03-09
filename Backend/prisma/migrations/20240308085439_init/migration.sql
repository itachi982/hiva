/*
  Warnings:

  - You are about to drop the column `deduction` on the `Deduction` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `job_id` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `job_name` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeDataId` to the `Deduction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryAfterDeduction` to the `Deduction` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `job_title` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Attendance` ADD COLUMN `employeeDataId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Deduction` DROP COLUMN `deduction`,
    ADD COLUMN `employeeDataId` INTEGER NOT NULL,
    ADD COLUMN `salaryAfterDeduction` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Employee` MODIFY `status` ENUM('active', 'inactive') NOT NULL;

-- AlterTable
ALTER TABLE `Job` DROP COLUMN `createdAt`,
    DROP COLUMN `job_id`,
    DROP COLUMN `job_name`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `job_title` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Session`;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deduction` ADD CONSTRAINT `Deduction_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
