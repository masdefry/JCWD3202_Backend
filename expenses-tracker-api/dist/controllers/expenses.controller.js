"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpenseById = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const findExpenseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let findData = yield promises_1.default.readFile('./src/db/db.json');
        findData = yield JSON.parse(findData);
        const { expenses } = findData; // []
        const findExpense = expenses.filter((item) => item.id === Number(id));
        res.status(200).json({
            success: true,
            message: `Get Expense with Id ${id} Success`,
            data: findExpense
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findExpenseById = findExpenseById;
