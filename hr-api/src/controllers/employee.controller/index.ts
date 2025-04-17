import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../connection';

export const createEmployeeProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathImage = `/public/images/${req?.files?.images[0]?.filename}`;
    const { birthDate, address } = JSON.parse(req.body.data);
    const { userId } = req.body.payload

    await prisma.employeeProfile.create({
      data: {
        birthDate, 
        address, 
        imageProfile: pathImage, 
        employeeId: userId
      }
    })

    res.status(201).json({
      success: true, 
      message: 'Created profile successfully', 
      data: null
    })
  } catch (error) {
    next(error);
  }
};
