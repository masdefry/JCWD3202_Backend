import { Router } from 'express';
const expensesRouter = Router();
import { findExpenseById } from '../controllers/expenses.controller';

expensesRouter.get('/:id', findExpenseById);

export default expensesRouter;
