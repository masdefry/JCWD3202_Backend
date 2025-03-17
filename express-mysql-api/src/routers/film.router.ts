import { Router } from 'express';
const filmRouter = Router();
import { findFilmById, findFilms } from '../controllers/film.controller';

filmRouter.get('/', findFilms);
filmRouter.get('/:id', findFilmById)

export default filmRouter;
