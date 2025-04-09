/*
  Warnings:

  - Added the required column `directory` to the `user_profile_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_profile_images` ADD COLUMN `directory` VARCHAR(191) NOT NULL;
