/*
  Warnings:

  - A unique constraint covering the columns `[employeeDataId,month]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Attendance_employeeDataId_month_key` ON `Attendance`(`employeeDataId`, `month`);
