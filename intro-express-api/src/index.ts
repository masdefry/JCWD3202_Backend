import express, { Express, Request, Response } from 'express';
import { promises as fs } from 'fs';

const app: Express = express();
const port = 5000;

// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express-Typescript API</h1>');
});

// CRUD (Create, Read, Update & Delete)
app.get('/api/products', async (req: Request, res: Response) => {
  let findData = await fs.readFile('./src/db/db.json', 'utf-8');
  let { products } = JSON.parse(findData);

  res.status(200).json({
    success: true,
    message: 'Get Products Success',
    data: products,
  });
});

app.post('/api/products', async (req: Request, res: Response) => {
  try {
    // Step-01 Ambil Data dari Req
    const { name, price, unit } = req.body;

    // Step-02 Read All Data
    let findData: any = await fs.readFile('./src/db/db.json', 'utf-8');
    findData = await JSON.parse(findData);

    // Step-03 Manipulasi Data Products
    const { products } = findData;
    products.push({
      id: products[products.length - 1].id + 1,
      name,
      price,
      unit,
    });

    // Step-04 Simpan Hasil Manipulasi Data Products ke Variable AllData
    findData.products = products;

    await fs.writeFile('./src/db/db.json', JSON.stringify(findData));

    res.status(201).json({
      success: true,
      message: 'Post Product Success',
      data: { name, price, unit },
    });
  } catch (error) {
    console.log(error);
  }
});

app.put('/api/products/:id', async (req: Request, res: Response) => {
  try {
    // Step-01 Ambil Data dari Request (req.body & req.params)
    const { name, price, unit } = req.body;
    const { id } = req.params;
    console.log(id);

    // Step-02 Read All Data
    let findData: any = await fs.readFile('./src/db/db.json', 'utf-8');
    findData = await JSON.parse(findData);

    // Step-03 Manipulasi Data
    const { products } = findData; // [{}, {}, {}, ...]
    const findIndexOfProduct = products.findIndex(
      (product: any) => product.id === Number(id)
    );

    if (findIndexOfProduct === -1)
      return res.status(404).json({
        success: false,
        message: `Update Product Failed. Product with Id ${id} Not Found!`,
        data: null,
      });

    products[findIndexOfProduct] = { id: Number(id), name, price, unit };
    findData.products = products;

    await fs.writeFile('./src/db/db.json', JSON.stringify(findData));

    res.status(201).json({
      success: true,
      message: 'Update Product Success',
      data: { name, price, unit },
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete('/api/products/:id', async(req: Request, res: Response) => {
  try {
    const {id} = req.params 

    let findData: any = await fs.readFile('./src/db/db.json', 'utf-8');
    findData = await JSON.parse(findData); // { products: [{}] }

    const {products} = findData 
    const findIndexOfProduct = products.findIndex((product: any) => product.id === Number(id))
    products.splice(findIndexOfProduct, 1)
    findData.products = products 

    await fs.writeFile('./src/db/db.json', JSON.stringify(findData));

    res.status(200).json({
      success: true, 
      message: `Delete Product with Id ${id} Success`, 
      data: null
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Exercise:
// 1. Buatkan end-point API untuk update data product
// 2. Buatkan end-point API untuk delete data product
