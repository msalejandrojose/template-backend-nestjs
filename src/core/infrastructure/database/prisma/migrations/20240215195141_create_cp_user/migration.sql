-- AlterTable
ALTER TABLE `CpUser` ADD COLUMN `aux` INTEGER NULL;

-- CreateTable
CREATE TABLE `cp_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
