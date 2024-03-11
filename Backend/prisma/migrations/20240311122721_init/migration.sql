/*
  Warnings:

  - You are about to alter the column `month` on the `Attendance` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[employeeDataId,month]` on the table `Deduction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Attendance` MODIFY `month` ENUM('janurary', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'September', 'october', 'november', 'december') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Deduction_employeeDataId_month_key` ON `Deduction`(`employeeDataId`, `month`);
