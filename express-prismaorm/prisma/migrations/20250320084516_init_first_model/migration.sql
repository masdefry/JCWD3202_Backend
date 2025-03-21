-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "firstDebutYear" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "albums" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "artistsId" TEXT NOT NULL,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "songs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "albumsId" TEXT NOT NULL,

    CONSTRAINT "songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlists" (
    "songsId" TEXT NOT NULL,
    "usersId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "playlists_songsId_key" ON "playlists"("songsId");

-- CreateIndex
CREATE UNIQUE INDEX "playlists_usersId_key" ON "playlists"("usersId");

-- AddForeignKey
ALTER TABLE "albums" ADD CONSTRAINT "albums_artistsId_fkey" FOREIGN KEY ("artistsId") REFERENCES "artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_albumsId_fkey" FOREIGN KEY ("albumsId") REFERENCES "albums"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_songsId_fkey" FOREIGN KEY ("songsId") REFERENCES "songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
