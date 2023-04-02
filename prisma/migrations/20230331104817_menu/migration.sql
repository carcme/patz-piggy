-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "title" TEXT,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
