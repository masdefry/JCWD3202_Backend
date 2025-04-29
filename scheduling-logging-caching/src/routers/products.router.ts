import { Router } from 'express';
const productsRouter = Router();
import {
  findProducts,
  findProductById,
  // createProduct,
} from '../controller/products.controller';
import { cacheProducts } from '../middlewares/cache/products.cache';
import { uploader } from '../middlewares/uploader.multer';

// productsRouter.get('/', cacheProducts, findProducts);
productsRouter.get('/', findProducts);
productsRouter.get('/:id', findProductById);
// productsRouter.post(
//   '/',
//   uploader(['image/jpg', 'image/jpeg', 'image/png', 'image/webp']).fields([
//     { name: 'images', maxCount: 3 },
//   ]),
//   createProduct
// );

export default productsRouter;
