/*
  Warnings:

  - Added the required column `month` to the `Deduction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Deduction` ADD COLUMN `month` VARCHAR(191) NOT NULL;
