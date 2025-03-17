import { Request, Response } from 'express';
import db from '../connection';
import { promisify } from 'util';
const query = promisify(db.query).bind(db);

export const findFilms = async (req: Request, res: Response) => {
  try {
    const { title, releaseYear } = req.query;

    if (title || releaseYear) {
      var findFilms = await query({
        sql: `SELECT * FROM film WHERE title = ? OR release_year = ?`,
        values: [title, releaseYear]
      });
    } else {
      var findFilms = await query({
        sql: `SELECT * FROM film`,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Get Films Success',
      data: findFilms,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findFilmById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findFilmById = await query({
      sql: 'SELECT * FROM film WHERE film_id = ?',
      values: [id],
    });

    res.status(200).json({
      success: true,
      message: `Get Film with Id ${id} Success`,
      data: findFilmById,
    });
  } catch (error) {
    console.log(error);
  }
};
