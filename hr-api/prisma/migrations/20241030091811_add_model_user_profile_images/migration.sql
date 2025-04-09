/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `user_profiles` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `user_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_profiles` DROP COLUMN `imageUrl`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `user_profile_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` LONGTEXT NOT NULL,
    `userProfilesId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_profile_images` ADD CONSTRAINT `user_profile_images_userProfilesId_fkey` FOREIGN KEY (`userProfilesId`) REFERENCES `user_profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
