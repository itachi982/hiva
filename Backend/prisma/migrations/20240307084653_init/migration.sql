/*
  Warnings:

  - You are about to alter the column `join_date` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Employee` MODIFY `join_date` DATETIME(3) NULL;
