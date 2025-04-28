Hello, JCWD-3202!

<!--  -->

- How to Setup Express Typescript?

        1. Create New Directory for Express Typescript Projects

        2. Inside New Directory, Execute this Command:

                npm init --yes

        3. Install Express Typescript

                npm install express cors

                npm install -D typescript ts-node nodemon @types/node @types/express  @types/cors

        4. Initiate Typescript Configuration

                npx tsc --init

        5. Replace `tsconfig.json` with This Configuration:

               {

                        "compilerOptions": {
                                "target": "ES6",
                                "module": "commonjs",
                                "outDir": "./dist",
                                "rootDir": "./src",
                                "strict": true,
                                "esModuleInterop": true,
                                "skipLibCheck": true
                        }
                }

        6. Replace Property `scripts` on `package.json` with this Code:

                "scripts": {
                        "dev": "nodemon",
                        "build": "tsc",
                        "start": "node dist/index.js",
                },

        7. Create New File with Name `nodemon.json` and Add this Configuration:

                {
                        "watch": ["src"],
                        "ext": "ts",
                        "ignore": ["dist"],
                        "exec": "ts-node src/index.ts"
                }


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

<!--  -->

- How to Install Redis on Windows?

        1.  Install WSL using Powershell (Admin)

                    wsl --install

        2.  Execute this Command

                    sudo apt update

                    sudo apt install redis-server

        3.  Running Redis Server

                    sudo service redis-server start

        4.  Test Redis

                    redis-cli ping

<!--  -->

- How to Install Docker?

        1. Activate Virtualization in BIOS (Ask to ChatGPT)

        2. Enable WSL2

        3. Download Docker Desktop

                        https://www.docker.com/products/docker-desktop/

        4. Install Docker Desktop. Select `Use WSL2 instead of Hyper-V Option` (If Using Windows Home)

        5. Restart Computer