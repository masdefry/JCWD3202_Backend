import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../connection';
import { hashPassword } from '../../utils/hash.password';
import { comparePassword } from '../../utils/compare.password';
import { jwtSign } from '../../utils/jwt.sign';

export const registerEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      email,
      password,
      name,
      phone,
      salary,
      leaveBalance = 12,
      shiftId,
      roleId,
    } = req.body;

    const findEmployeeByEmail = await prisma.employee.findFirst({
      where: {
        email,
      },
    });

    if (findEmployeeByEmail !== null) {
      throw { isExpose: true, status: 401, message: 'Email already exist' };
    }

    const hashedPassword = await hashPassword(password);

    await prisma.employee.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        salary,
        leaveBalance,
        shiftId,
        roleId,
      },
    });

    res.status(201).json({
      success: true,
      message: `Employee ${name} registered successfully`,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const loginEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const findEmployeeByEmail = await prisma.employee.findFirst({
      where: { email },
      include: {
        roles: true,
      },
    });

    if (findEmployeeByEmail === null) {
      throw { isExpose: true, status: 401, message: 'Email not found' };
    }

    const isPasswordMatch = await comparePassword(
      findEmployeeByEmail?.password,
      password
    );

    if (isPasswordMatch === false) {
      throw { isExpose: true, status: 401, message: 'Invalid password' };
    }

    const token = jwtSign({
      userId: findEmployeeByEmail.id,
      userRole: findEmployeeByEmail.roles.title,
    });

    res.status(200).json({
      success: true,
      message: 'Login successfully',
      data: {
        token,
        email: findEmployeeByEmail.email,
        role: findEmployeeByEmail.roles.title,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sessionLoginEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payload } = req.body;
    
    const findEmployeeByUserId = await prisma.employee.findFirst({
      where: { id: payload.userId },
      include: {
        roles: true,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Session login successfully',
      data: {
        token: req.headers.authorization?.split(' ')[1],
        email: findEmployeeByUserId?.email,
        role: findEmployeeByUserId?.roles.title,
      },
    });
  } catch (error) {
    next(error);
  }
};
