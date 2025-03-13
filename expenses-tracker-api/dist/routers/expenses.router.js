"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expensesRouter = (0, express_1.Router)();
const expenses_controller_1 = require("../controllers/expenses.controller");
expensesRouter.get('/:id', expenses_controller_1.findExpenseById);
expensesRouter.get('/total/filter', expenses_controller_1.findTotalExpensesByFilter);
exports.default = expensesRouter;
