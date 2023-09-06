/*
  Warnings:

  - You are about to drop the column `name` on the `Backgrounds` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `Backgrounds` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Backgrounds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Backgrounds" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_name_key" ON "Movies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Backgrounds_url_key" ON "Backgrounds"("url");
