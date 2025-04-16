import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../connection';

export const clockInAttendance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body.payload;

    const findAttendanceByCreatedAt = await prisma.attendance.findFirst({
      where: {
        createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)), 
            lte: new Date(new Date().setHours(23, 59, 59, 999))
        },
        employeeId: userId,
      },
    });

    if (findAttendanceByCreatedAt) {
      throw {
        isExpose: true,
        status: 400,
        message: 'You have already clocked in today',
      };
    }

    await prisma.attendance.create({
      data: {
        clockIn: new Date(),
        employeeId: userId,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Clocked in successfully',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
