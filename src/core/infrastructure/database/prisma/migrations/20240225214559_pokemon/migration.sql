-- CreateTable
CREATE TABLE `ability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(79) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `base_stat` (
    `pokemon_id` INTEGER NOT NULL,
    `b_hp` INTEGER NULL,
    `b_atk` INTEGER NULL,
    `b_def` INTEGER NULL,
    `b_sp_atk` INTEGER NULL,
    `b_sp_def` INTEGER NULL,
    `b_speed` INTEGER NULL,

    PRIMARY KEY (`pokemon_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `move` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(79) NOT NULL,
    `type_id` INTEGER NOT NULL,
    `power` SMALLINT NULL,
    `pp` SMALLINT NULL,
    `accuracy` SMALLINT NULL,

    INDEX `type_id`(`type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(79) NOT NULL,
    `height` INTEGER NULL,
    `weight` INTEGER NULL,
    `base_experience` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_ability` (
    `pokemon_id` INTEGER NOT NULL,
    `ability_id` INTEGER NOT NULL,
    `is_hidden` BOOLEAN NOT NULL,
    `slot` INTEGER NOT NULL,

    INDEX `ability_id`(`ability_id`),
    INDEX `ix_pokemon_abilities_is_hidden`(`is_hidden`),
    PRIMARY KEY (`pokemon_id`, `slot`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_evolution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `evolved_species_id` INTEGER NOT NULL,
    `evol_minimum_level` INTEGER NULL,

    INDEX `evolved_species_id`(`evolved_species_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_evolution_matchup` (
    `pokemon_id` INTEGER NOT NULL AUTO_INCREMENT,
    `evolves_from_species_id` INTEGER NULL,
    `pokemon_habitat_id` INTEGER NULL,
    `gender_rate` INTEGER NOT NULL,
    `capture_rate` INTEGER NOT NULL,
    `base_happiness` INTEGER NOT NULL,

    INDEX `evolves_from_species_id`(`evolves_from_species_id`),
    INDEX `habitat_id`(`pokemon_habitat_id`),
    PRIMARY KEY (`pokemon_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_habitat` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(79) NOT NULL,
    `descript` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_move` (
    `pokemon_id` INTEGER NOT NULL,
    `version_group_id` INTEGER NOT NULL,
    `move_id` INTEGER NOT NULL,
    `method_id` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,

    INDEX `ix_pokemon_moves_level`(`level`),
    INDEX `ix_pokemon_moves_move_id`(`move_id`),
    INDEX `ix_pokemon_moves_pokemon_id`(`pokemon_id`),
    INDEX `ix_pokemon_moves_pokemon_move_method_id`(`method_id`),
    INDEX `ix_pokemon_moves_version_group_id`(`version_group_id`),
    PRIMARY KEY (`pokemon_id`, `version_group_id`, `move_id`, `method_id`, `level`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_move_method` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(79) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemon_type` (
    `pokemon_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL,
    `slot` INTEGER NOT NULL,

    INDEX `type_id`(`type_id`),
    PRIMARY KEY (`pokemon_id`, `slot`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(79) NOT NULL,
    `damage_type_id` INTEGER NULL,

    INDEX `damage_type_idx`(`damage_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_efficacy` (
    `damage_type_id` INTEGER NOT NULL,
    `target_type_id` INTEGER NOT NULL,
    `damage_factor` INTEGER NOT NULL,

    UNIQUE INDEX `type_efficacy_damage_type_id_key`(`damage_type_id`),
    INDEX `target_type_id`(`target_type_id`),
    PRIMARY KEY (`damage_type_id`, `target_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `version_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(79) NOT NULL,
    `order` INTEGER NULL,

    UNIQUE INDEX `identifier`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `base_stat` ADD CONSTRAINT `pokemon_id` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `move` ADD CONSTRAINT `fk_move_1` FOREIGN KEY (`type_id`) REFERENCES `type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_ability` ADD CONSTRAINT `fk_pokemon_ability_1` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_ability` ADD CONSTRAINT `fk_pokemon_ability_2` FOREIGN KEY (`ability_id`) REFERENCES `ability`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_evolution` ADD CONSTRAINT `fk_pokemon_evolution_1` FOREIGN KEY (`evolved_species_id`) REFERENCES `pokemon_evolution_matchup`(`pokemon_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_evolution_matchup` ADD CONSTRAINT `fk_pokemon_evolution_matchup_6` FOREIGN KEY (`pokemon_habitat_id`) REFERENCES `pokemon_habitat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_evolution_matchup` ADD CONSTRAINT `poke_fk` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_move` ADD CONSTRAINT `fk_pokemon_moves_1` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_move` ADD CONSTRAINT `fk_pokemon_moves_2` FOREIGN KEY (`move_id`) REFERENCES `move`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_move` ADD CONSTRAINT `fk_pokemon_moves_3` FOREIGN KEY (`version_group_id`) REFERENCES `version_group`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_move` ADD CONSTRAINT `fk_pokemon_moves_4` FOREIGN KEY (`method_id`) REFERENCES `pokemon_move_method`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pokemon_type` ADD CONSTRAINT `fk_pokemon_types_1` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `type` ADD CONSTRAINT `damage_type` FOREIGN KEY (`damage_type_id`) REFERENCES `type_efficacy`(`damage_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
