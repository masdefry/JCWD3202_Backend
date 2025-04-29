// Menghandle Request dan Response

import { NextFunction, Request, Response } from 'express';
import { findProductsService } from '../../services/products.service/find.products.service';
import { findProductByIdService } from '../../services/products.service/find.productById.service';
import { AppError } from '../../utils/app.error';
import { cloudinaryUpload } from '../../utils/cloudinary.upload';

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

    const product = await findProductByIdService(id);

    if (!product) {
      throw AppError(`Product with id ${id} not found`, 404);
    }
  } catch (error) {
    next(error);
  }
};

// export const createProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { name, price, description, stock } = req.body;

//     let files: Express.Multer.File[] | undefined;
//     let imagesUploaded;
//     if (req.files) {
//       files = Array.isArray(req.files) ? req.files : req.files['images'];

//       imagesUploaded = []; // Get Image Path and Image Filename to Store into DB
//       for (const image of files!) {
//         console.log(image);
//         // Upload Each Image to Cloudinary
//         const result: any = await cloudinaryUpload(image.buffer);
//         console.log(result);

//         imagesUploaded.push(result.res!); // Assuming `res` is Always Defined, Use Non-null Assertion
//       }
//     }

//     await prisma.product.create({
//       imageUrl: imagesUploaded[0],
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const register = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const result = prisma.$transaction(async (tx) => {
//       tx.user.create();

//       tx.points.create();

//       return tx.user.findMany();
//     });
//   } catch (error) {
//     next(error);
//   }
// };
