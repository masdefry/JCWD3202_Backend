import { NextFunction, Request, Response } from 'express';

export const hrOnly = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userRole } = req.body.payload;
    if (userRole !== 'HR') {
      throw {
        isExpose: true,
        status: 403,
        message: 'You are not authorized to access this resource',
      };
    }

    next();
  } catch (error) {
    next(error);
  }
};
