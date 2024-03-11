/*
  Warnings:

  - You are about to alter the column `month` on the `Deduction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(4))`.

*/
-- AlterTable
ALTER TABLE `Deduction` MODIFY `month` ENUM('janurary', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'September', 'october', 'november', 'december') NOT NULL;
