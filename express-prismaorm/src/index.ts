import express, { Express, NextFunction, Request, Response } from 'express';
import artistsRouter from './routers/artists.router';

const app: Express = express();
const port = 5000;

// Body Parser: Method Supaya Express Dapat Mengambil Data dari Request
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express-Typescript API</h1>');
});

app.use('/api/artists', artistsRouter);

// Centralized Error Middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false, 
    message: error.isExpose? error.message : 'Something Went Wrong', 
    data: null
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
