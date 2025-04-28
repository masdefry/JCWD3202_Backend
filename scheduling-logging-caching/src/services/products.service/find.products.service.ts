// Menghandle Logika (Hash Password, Menghitung Discount, Membuat Token)
// Menghandle Mengakses Database (Membaca, Menulis, Mengupdate, Menghapus)

import { prisma } from '../../connection/prisma.client';
import redis from '../../connection/redis';

export const findProductsService = async () => {
  const cacheKey = 'products:all';

  const products = await prisma.product.findMany({});

  await redis.set(cacheKey, JSON.stringify(products), 'EX', 60); 

  return products;
};
