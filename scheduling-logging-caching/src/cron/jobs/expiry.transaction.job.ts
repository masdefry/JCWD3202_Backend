import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const expiryTransactionJob = async() => {
    await prisma.transaction.updateMany({
        where: {
            status: 'WAITING_FOR_PAYMENT',
            expiryAt: { 
                lte: new Date() 
            }
        },
        data: {
            status: 'EXPIRED'
        }
    })
};
