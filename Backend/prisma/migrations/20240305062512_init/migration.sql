-- CreateTable
CREATE TABLE `Job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_id` VARCHAR(191) NOT NULL,
    `job_name` VARCHAR(191) NOT NULL,
    `base_salary` INTEGER NOT NULL,
    `transportation_allowance` INTEGER NOT NULL,
    `meal_allowance` INTEGER NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `employeeDataId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(191) NOT NULL,
    `employee_id` VARCHAR(191) NOT NULL,
    `employee_name` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `job_name` VARCHAR(191) NULL,
    `present` INTEGER NULL,
    `sick` INTEGER NULL,
    `absent` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` VARCHAR(191) NOT NULL,
    `NIK` VARCHAR(191) NOT NULL,
    `employee_name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `job_title` VARCHAR(191) NOT NULL,
    `join_date` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `access_rights` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deduction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `deduction` VARCHAR(191) NOT NULL,
    `deduction_amount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `sid` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `data` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`sid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_employeeDataId_fkey` FOREIGN KEY (`employeeDataId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
