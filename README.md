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

<!--  -->

        - How to Dockerize MySql as Database

        1.      Pull MySql Image from Docker Hub. You can Execute this Command on Terminal Admin

                        docker pull mysql

        2.      Create MySql Container Based on MySql Image

                bash> docker run --name [CONTAINER_NAME] -p [CONTAINER_PORT]:[MYSQL_PORT] -e MYSQL_ROOT_PASSWORD=[YOUR_PASSWORD] -d mysql:tag

                        docker run --name mysql-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc12345 -d mysql:latest

        3.      To Access MySql Server on MySql Container using Terminal

                        docker exec -it mysql-container bash

                        mysql -u root -p

- How to Dockerize Express.ts Project

        1.      Create New File with Name `Dockerfile`

        2.      Add this Configuration to `Dockerfile`

                        # __FOR DEVELOPMENT PURPOSES__

                        # Base Image: Where our app will running
                        FROM node:20

                        # Set Working Directory: Where our app will be placed
                        WORKDIR /app

                        # Copy `package.json` into Working Directory
                        COPY package*.json ./

                        # Install Dependencies
                        RUN npm install

                        # Copy All File(s) into Working Directory
                        COPY . .

                        # Prisma Generate
                        RUN npx prisma generate

                        # Following Port on `index.ts` File
                        EXPOSE 4000

                        # Install Nodemon for Hot-Reloading during Development Phase
                        RUN npm install -g nodemon

                        # Command to Run the App using Nodemon
                        CMD ["npm", "run", "dev"]

        3.      Create New File with Name `.dockerignore`, and Add this Configuration

                        node_modules/

        4.      Modify `nodemon.json` File, and Add `legacyWatch` Props

                        "legacyWatch": true

        5.      Built Project to be Image Docker

                        docker build -t dockerize-api:v1 .

        6.      Create and Running Container

                bash> docker run -d --name [CONTAINER_NAME] -p [CONTAINER_PORT]:[APP_PORT > Following Port on `index.ts` File] -v ${PWD}:/app -v /app/node_modules dockerize-api:v1

                        docker run -d --name dockerize-api-container -p 4000:4000 -v ${PWD}:/app -v /app/node_modules dockerize-api:v1

- How to Connecting Botch Container Between `MySql Container` and `Express.ts Container`

        1.      Create New Network

                        docker network create test-01-network

        2.      Connect Both Container into Created Network

                        docker network connect test-01-network mysql-container

                        docker network connect test-01-network dockerize-api-container

- How to Dockerize MySql and Express.ts Project using Docker Compose?

        1.      Create New File with Name `Dockerfile`

        2.      Add this Configuration to `Dockerfile`

                        # __FOR DEVELOPMENT PURPOSES__

                        # Base Image: Where our app will running
                        FROM node:20

                        # Set Working Directory: Where our app will be placed
                        WORKDIR /app

                        # Copy `package.json` into Working Directory
                        COPY package*.json ./

                        # Install Dependencies
                        RUN npm install

                        # Copy All File(s) into Working Directory
                        COPY . .

                        # Prisma Generate
                        RUN npx prisma generate

                        # Following Port on `index.ts` File
                        EXPOSE 4000

                        # Install Nodemon for Hot-Reloading during Development Phase
                        RUN npm install -g nodemon

                        # Command to Run the App using Nodemon
                        CMD ["npm", "run", "dev"]

        3.      Create New File with Name `.dockerignore`, and Add this Configuration

                        node_modules/

        4.      Modify `nodemon.json` File, and Add `legacyWatch` Props

                        "legacyWatch": true

        5.      Create New File with Name `docker-compose.yml`, and Add Configuraion Like on `docker-compose.yml file`

        6.      Running Container

                        docker-compose up --build
