const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  {
    name: 'Apel Malang',
    price: 20000,
    stock: 100,
    description:
      'Apel Malang adalah apel yang terkenal dengan rasa manis dan segar. Cocok untuk camilan sehat.',
    slug: 'apel-malang',
  },
  {
    name: 'Jeruk Bali',
    price: 15000,
    stock: 50,
    description:
      'Jeruk Bali adalah jeruk yang memiliki rasa manis dan sedikit asam. Sangat menyegarkan.',
    slug: 'jeruk-bali',
  },
  {
    name: 'Pisang Ambon',
    price: 10000,
    stock: 200,
    description:
      'Pisang Ambon adalah pisang yang terkenal dengan rasa manisnya. Cocok untuk dijadikan smoothie.',
    slug: 'pisang-ambon',
  },
];

const transactions = [
  {
    quantity: 3,
    totalPrice: 65000,
    status: 'WAITING_FOR_PAYMENT',
    transactionItems: [
      {
        productId: 1,
        quantity: 2,
        totalPrice: 40000,
      },
      {
        productId: 2,
        quantity: 1,
        totalPrice: 15000,
      },
      {
        productId: 3,
        quantity: 1,
        totalPrice: 10000,
      },
    ],
  },
];

const main = async () => {
  //   await prisma.product.createMany({ data: products });

  transactions.forEach(async (transaction) => {
    const createdTransaction = await prisma.transaction.create({
      data: {
        quantity: transaction.quantity,
        totalPrice: transaction.totalPrice,
        status: transaction.status,
        expiryAt: new Date(Date.now() + 1 * 60 * 1000),
      },
    });

    transaction.transactionItems.forEach(async (item) => {
      await prisma.transactionItem.create({
        data: {
          ...item,
          transactionId: createdTransaction.id,
        },
      });
    });
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
