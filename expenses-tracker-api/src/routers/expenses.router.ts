import { Router } from 'express';
const expensesRouter = Router();
import { findTotalExpensesByFilter, findExpenseById } from '../controllers/expenses.controller';

expensesRouter.get('/:id', findExpenseById);
expensesRouter.get('/total/filter', findTotalExpensesByFilter)

export default expensesRouter;
