/*
  Warnings:

  - A unique constraint covering the columns `[employee_id,jobdataid]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Employee_employee_id_jobdataid_key` ON `Employee`(`employee_id`, `jobdataid`);
