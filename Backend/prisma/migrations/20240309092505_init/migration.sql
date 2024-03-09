/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Deduction` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Deduction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Attendance` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `Deduction` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
