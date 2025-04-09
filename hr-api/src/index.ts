import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port = 5001;
app.use(express.json())
app.use(cors({
  origin: '*'
}))

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Express Typescript Server</h1>');
});

// Centralized Error
interface IError extends Error{
  status: number, 
  msg: string
}
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});