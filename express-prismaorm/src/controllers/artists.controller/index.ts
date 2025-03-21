import { NextFunction, Request, Response } from 'express';
import { IArtist } from './types';
import { prisma } from '../../connection/prisma.client';

export const createArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, genre, firstDebutYear, country, description }: IArtist =
      req.body;

    await prisma.artist.create({
      data: { name, genre, firstDebutYear, country, description },
    });

    res.status(201).json({
      success: true,
      message: 'Create Artist Success',
      data: { name, genre, firstDebutYear, country, description },
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const findArtists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findArtists: IArtist[] = await prisma.artist.findMany();

    res.status(200).json({
      success: true,
      message: 'Get Artists Success',
      data: findArtists,
    });
  } catch (error) {
    next(error);
  }
};

export const updateArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, genre, firstDebutYear, country, description }: IArtist =
      req.body;

    await prisma.artist.update({
      where: { id },
      data: {
        name,
        genre,
        firstDebutYear,
        country,
        description,
      },
    });

    res.status(200).json({
      success: true,
      message: `Update Artist with Id ${id} Success`,
      data: {
        name,
        genre,
        firstDebutYear,
        country,
        description,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteArtist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params

    await prisma.artist.delete({
      where: {id}
    })

    res.status(200).json({
      success: true, 
      message: `Delete Artist with Id ${id} Success`, 
      data: null
    })
  } catch (error) {
    next(error)
  }
};
