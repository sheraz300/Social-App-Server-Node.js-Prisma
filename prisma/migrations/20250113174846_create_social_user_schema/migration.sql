-- CreateTable
CREATE TABLE "SocialUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialUser_username_key" ON "SocialUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "SocialUser_email_key" ON "SocialUser"("email");
