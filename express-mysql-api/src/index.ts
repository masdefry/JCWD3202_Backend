import express, { Express, Request, Response } from 'express';
import passengersRouter from './routers/passengers.router';

const app: Express = express();
const port = 5000;

// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express-Typescript API</h1>');
});

app.use('/api/passengers', passengersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
