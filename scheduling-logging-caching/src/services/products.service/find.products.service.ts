// Menghandle Logika (Hash Password, Menghitung Discount, Membuat Token)
// Menghandle Mengakses Database (Membaca, Menulis, Mengupdate, Menghapus)

import { prisma } from '../../connection/prisma.client';

export const findProductsService = async () => {
  const products = await prisma.product.findMany({});

  return products;
};
