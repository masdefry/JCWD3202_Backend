Hello, JCWD-3202!

<!--  -->

- How to Setup Express Typescript?

        1. Create New Directory for Express Typescript Projects

        2. Inside New Directory, Execute this Command:

                npm init --yes

        3. Install Express Typescript

                npm i express @types/express @types/node

                npm i -D typescript concurrently nodemon

        4. Install MySql2

                npm i mysql2

        5. Initiate Typescript Configuration

                npx tsc --init

        6. Edit `tsconfig.json`:

                - Uncomment rootDir:  "rootDir": "./src"

                - Uncomment outDir:   "outDir": "./dist"

        7. Replace Property `scripts` on `package.json` with this Code:

                "scripts": {
                        "build": "npx tsc",
                        "start": "node dist/index.js",
                        "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
                },

        8. Running Express Typescript Projects

                npm run dev

<!--  -->

- How to Setup ORM Prisma?

        1. Install Package

                npm install prisma --save-dev

                npx prisma init --datasource-provider mysql

        2. Edit on `.env` Files

                DATABASE_URL="mysql://DBUSER:DBPASSWORD@localhost:3306 DBNAME"

        3. Create Model Inside `prisma > schema.prisma`:

                model User {
                  id        String        @id @default(cuid())
                  email     String        @unique
                  name      String
                  password   String

                  user_addresses UserAddress[]

                  createdAt   DateTime  @default(now())
                  updatedAt   DateTime  @updatedAt
                  deletedAt   DateTime?

                  @@map("users")
                }

                model UserAddress{
                  id        Int     @id @default(autoincrement())
                  consignee String
                  address   String

                  userId    String @unique
                  users User @relation(fields: [userId], references: [id])

                  createdAt   DateTime  @default(now())
                  updatedAt   DateTime  @updatedAt
                  deletedAt   DateTime?

                  @@map("user_addresses")
                }

        4. Migration Models

                npx prisma migrate dev --name init
