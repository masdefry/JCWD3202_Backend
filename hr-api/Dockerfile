# Base Image: Where Our App will Running 
FROM node:18

# Working Directory: Where Our App will be Placed
WORKDIR /app 

# Copy `package.json` into Working Directory
COPY package.json . 

# Install Dependencies
RUN npm install

# Copy All File(s) into Working Directory
COPY . .

# Copy `.env` file for Prisma
COPY .env .env

# Prisma Generate
RUN npx prisma generate

# Prisma Migrate
# RUN npx prisma migrate deploy

# Following Port on `index.ts`
EXPOSE 5001 

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]