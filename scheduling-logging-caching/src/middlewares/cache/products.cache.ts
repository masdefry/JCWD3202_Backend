import { NextFunction, Request, Response } from 'express';
import redis from '../../connection/redis';

export const cacheProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cacheKey = 'products:all';

    const cachedProducts = await redis.get(cacheKey);

    if (cachedProducts) {
      res.status(200).json({
        success: true,
        message: 'Products retrieved from cache',
        products: JSON.parse(cachedProducts)
      });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
