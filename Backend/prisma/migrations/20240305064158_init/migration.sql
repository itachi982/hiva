/*
  Warnings:

  - You are about to drop the column `NIK` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `PAN` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `NIK`,
    ADD COLUMN `PAN` VARCHAR(191) NOT NULL;
