import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../connection';
import { hashPassword } from '../../utils/hash.password';

export const registerEmployee = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name, phone, salary, leaveBalance = 12, shiftId, roleId } = req.body

    const findEmployeeByEmail = await prisma.employee.findFirst({
      where: {
        email
      }
    })

    if(findEmployeeByEmail !== null){
      throw { isExpose: true, status: 401, message: 'Email already exist' }
    }

    const hashedPassword = await hashPassword(password)

    await prisma.employee.create({
      data: {
        email, 
        password: hashedPassword, 
        name, 
        phone, 
        salary, 
        leaveBalance,
        shiftId, 
        roleId
      }
    })

    res.status(201).json({
      success: true, 
      message: `Employee ${name} registered successfully`,
      data: null
    })
  } catch (error) {
    next(error);
  }
};
