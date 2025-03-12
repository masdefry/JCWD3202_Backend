import express, { Express, Request, Response } from 'express';
import productsRouter from './routers/products.router';
import expensesRouter from './routers/expenses.router';

const app: Express = express();
const port = 5000;

// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express-Typescript API</h1>');
});

app.use('/api/products', productsRouter)
app.use('/api/expenses', expensesRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});