/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `organizerId` INTEGER NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `location` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME(0) NOT NULL,
    `price` INTEGER NOT NULL DEFAULT 0,
    `availableSeats` INTEGER NOT NULL,
    `promotion` INTEGER NULL,
    `ticket_type` ENUM('free', 'paid') NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    INDEX `organizerId`(`organizerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NULL,
    `code` VARCHAR(255) NULL,
    `discountAmount` INTEGER NULL,
    `usageLimit` INTEGER NULL,
    `validFrom` DATE NULL,
    `validTo` DATE NULL,
    `createdAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `code`(`code`),
    INDEX `eventId`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `referrals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralUserId` INTEGER NULL,
    `referralOwnerId` INTEGER NULL,
    `pointsEarned` INTEGER NULL,
    `pointsExpiry` DATETIME(0) NULL,
    `createdAt` TIMESTAMP(0) NULL,

    INDEX `referralUserId`(`referralUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NULL,
    `eventId` INTEGER NULL,
    `rating` INTEGER NULL,
    `reviewText` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL,
    `updated_at` DATETIME(0) NULL,

    INDEX `customerId`(`customerId`),
    INDEX `eventId`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NULL,
    `customerId` INTEGER NULL,
    `transactionId` INTEGER NULL,
    `price` INTEGER NULL,
    `status` ENUM('purchased', 'checked_in', 'canceled') NULL,
    `createdAt` TIMESTAMP(0) NULL,

    INDEX `customerId`(`customerId`),
    INDEX `transactionId`(`transactionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NULL,
    `eventId` INTEGER NULL,
    `totalAmount` INTEGER NULL,
    `promotionsId` INTEGER NULL,
    `paymentStatus` ENUM('paid', 'pending', 'failed') NULL,
    `createdAt` TIMESTAMP(0) NULL,

    INDEX `customerId`(`customerId`),
    INDEX `promotionsId`(`promotionsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralCode` VARCHAR(255) NULL,
    `pointsBalance` INTEGER NULL DEFAULT 0,
    `roleId` INTEGER NULL,
    `name` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `password` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `referralCode`(`referralCode`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`organizerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `promotions` ADD CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `referrals` ADD CONSTRAINT `referrals_ibfk_1` FOREIGN KEY (`referralUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`transactionId`) REFERENCES `transactions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`promotionsId`) REFERENCES `promotions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
