import express, { Express, Request, Response } from 'express';
import passengersRouter from './routers/passengers.router';
import filmRouter from './routers/film.router';

const app: Express = express();
const port = 5000;

// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express-Typescript API</h1>');
});

app.use('/api/passengers', passengersRouter);
app.use('/api/films', filmRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Exercise:
// Buatlah REST API
