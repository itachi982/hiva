/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employee_id]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[PAN]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    MODIFY `join_date` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NULL,
    MODIFY `PAN` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_employee_id_key` ON `Employee`(`employee_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Employee_PAN_key` ON `Employee`(`PAN`);
