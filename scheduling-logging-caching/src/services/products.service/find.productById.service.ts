import { prisma } from "../../connection/prisma.client"

export const findProductByIdService = async (id: string) => {
    return await prisma.product.findFirst({
        where: {
            id: parseInt(id)
        }
    })
}