import { NextFunction, Request, Response } from 'express';

export const test = (req: Request, res: Response, next: NextFunction) => {
  console.log('Test middleware executed');
  next();
};
