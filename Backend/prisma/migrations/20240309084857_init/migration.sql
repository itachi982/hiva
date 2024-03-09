/*
  Warnings:

  - You are about to drop the column `employee_id` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `employee_name` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `job_name` on the `Attendance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[job_title]` on the table `Job` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Attendance` DROP COLUMN `employee_id`,
    DROP COLUMN `employee_name`,
    DROP COLUMN `gender`,
    DROP COLUMN `job_name`;

-- CreateIndex
CREATE UNIQUE INDEX `Job_job_title_key` ON `Job`(`job_title`);
