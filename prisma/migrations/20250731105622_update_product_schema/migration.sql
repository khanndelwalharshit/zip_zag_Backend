-- AlterTable
ALTER TABLE `catalog` ADD COLUMN `hasPassword` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    ADD COLUMN `views` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `parentId` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `joinedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastLogin` DATETIME(3) NULL,
    ADD COLUMN `region` VARCHAR(191) NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE `inquiry` ADD COLUMN `priority` VARCHAR(191) NOT NULL DEFAULT 'medium',
    ADD COLUMN `productName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `offerPercentage` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `shortDescription` VARCHAR(100) NULL;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
