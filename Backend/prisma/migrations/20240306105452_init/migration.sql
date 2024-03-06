/*
  Warnings:

  - You are about to alter the column `access_rights` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[username]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Employee` MODIFY `access_rights` ENUM('user', 'admin') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_username_key` ON `Employee`(`username`);
