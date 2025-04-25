import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { expiryTransactionSchedule } from './cron/expiry.transaction.schedule';
import productsRouter from './routers/products.router';
import logger from './utils/logger';
import { AppError } from './utils/app.error';

const app: Express = express();
const port = 4000;
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

expiryTransactionSchedule(); // Start the Cron Job

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express Typescript Server</h1>');
});

app.use('/api/products', productsRouter);

// Centralized Error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${req.method} ${req.url} - ${error.message}`);

  const errorStatus = error.isExpose? error.statusCode : 500;
  const errorMessage = error.isExpose ? error.message : 'Internal Server Error';

  res.status(errorStatus).json({
    success: false,
    message: errorMessage,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});