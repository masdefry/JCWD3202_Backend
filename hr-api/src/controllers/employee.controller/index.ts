import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../connection';
import { deleteFiles } from '../../utils/delete.files';

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

export const findEmployeeProfile = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body.payload

    const findEmployeeProfileByEmployeeId = await prisma.employeeProfile.findFirst({
      where: {
        employeeId: userId
      }
    })

    res.status(200).json({
      success: true, 
      message: 'Get Employee Profile Successful', 
      data: findEmployeeProfileByEmployeeId
    })
  } catch (error) {
    next(error)
  }
}

export const updateEmployeeProfile = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body.payload 
    const { birthDate, address } = JSON.parse(req.body.data)
    const pathImage = `/public/images/${req?.files?.images[0]?.filename}`;

    const findEmployeeProfileByEmployeeId = await prisma.employeeProfile.findFirst({
      where: {
        employeeId: userId
      }
    })

    if(!findEmployeeProfileByEmployeeId) throw { isExpose: true, message: 'Employee not found' }

    deleteFiles([findEmployeeProfileByEmployeeId?.imageProfile!])

    await prisma.employeeProfile.update({
      data: {
        birthDate, 
        address, 
        imageProfile: pathImage
      }, 
      where: {
        employeeId: userId 
      }
    })

    res.status(201).json({
      success: true, 
      message: 'Update Employee Profile Successful', 
      data: null
    })
  } catch (error) {
    next(error)
  }
}