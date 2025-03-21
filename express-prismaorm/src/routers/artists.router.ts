import { Router } from 'express';
const artistsRouter = Router();

import {
  createArtist,
  deleteArtist,
  findArtists,
  updateArtist,
} from '../controllers/artists.controller';

artistsRouter.post('/', createArtist);
artistsRouter.get('/', findArtists);
artistsRouter.put('/:id', updateArtist);
artistsRouter.delete('/:id', deleteArtist);

export default artistsRouter;
