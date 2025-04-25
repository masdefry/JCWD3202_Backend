// Menghandle Request dan Response

import { NextFunction, Request, Response } from 'express';
import { findProductsService } from '../../services/products.service/find.products.service';
import { findProductByIdService } from '../../services/products.service/find.productById.service';
import { AppError } from '../../utils/app.error';

export const findProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await findProductsService();

    res.status(200).json({
      success: true,
      message: 'Get Products Successful',
      products,
    });
  } catch (error) {
    next(error);
  }
};

export const findProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await findProductByIdService(id)

    if(!product) {
      throw AppError(`Product with id ${id} not found`, 404)
    }
  } catch (error) {
    next(error);
  }
};
