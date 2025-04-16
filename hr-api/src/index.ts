import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import authRouter from './routers/auth.router';
import attendancesRouter from './routers/attendances.router';

const app: Express = express();
const port = 5001;
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express Typescript Server</h1>');
});

app.use('/api/employee', authRouter);
app.use('/api/attendances', attendancesRouter);

// Centralized Error
interface IError extends Error {
  isExpose: boolean;
  status: number;
  message: string;
}
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(err.status || 500).json({
    success: false, 
    message: err.isExpose? err.message : err.message === 'jwt expired'? 'Session login is expired' : 'Internal server error',
    data: null
  })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
