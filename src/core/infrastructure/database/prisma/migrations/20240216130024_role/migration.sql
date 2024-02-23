/*
  Warnings:

  - You are about to drop the `CpUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `cp_user` ADD COLUMN `aux` INTEGER NULL,
    ADD COLUMN `date` DATETIME(3) NULL,
    ADD COLUMN `last_name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `CpUser`;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
