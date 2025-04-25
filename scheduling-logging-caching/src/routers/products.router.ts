import { Router } from 'express';
const productsRouter = Router();
import { findProducts, findProductById } from '../controller/products.controller';

productsRouter.get('/', findProducts);
productsRouter.get('/:id', findProductById);

export default productsRouter;
