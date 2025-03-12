import { Request, Response } from 'express';
import fs from 'fs/promises';

export const findExpenseById = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    let findData: any = await fs.readFile('./src/db/db.json')
    findData = await JSON.parse(findData)
    
    const {expenses} = findData // []
    
    const findExpense = expenses.filter((item: any) => item.id === Number(id))
    
    res.status(200).json({
        success: true, 
        message: `Get Expense with Id ${id} Success`,
        data: findExpense
    })
  } catch (error) {
    console.log(error)
  }
};
