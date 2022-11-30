/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - Changed the type of `authorId` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId";
ALTER TABLE "Post" ADD COLUMN     "authorId" STRING NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- RedefineTables
CREATE TABLE "_prisma_new_User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "name" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
DROP INDEX "User_email_key";
INSERT INTO "_prisma_new_User" ("email","id","name") SELECT "email","id","name" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
