-- CreateTable
CREATE TABLE `user2` (
    `id` CHAR(36) NOT NULL DEFAULT (uuid()),
    `name` VARCHAR(150) NULL,
    `surname` VARCHAR(100) NULL,
    `username` VARCHAR(100) NOT NULL,
    `pass` VARCHAR(100) NOT NULL,
    `role` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
