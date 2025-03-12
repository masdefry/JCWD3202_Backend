import { Router } from 'express';
const productsRouter = Router();
import {
  createProduct,
  findProducts,
} from '../controllers/products.controller';

productsRouter.get('/', findProducts);
productsRouter.post('/', createProduct);

export default productsRouter;
