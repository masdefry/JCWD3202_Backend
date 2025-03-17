import { Router } from 'express';
const passengersRouter = Router();
import {
  createPassenger,
  deletePassenger,
  findPassengers,
  updatePassenger,
} from '../controllers/passengers.controller';

passengersRouter.get('/', findPassengers);
passengersRouter.post('/', createPassenger);
passengersRouter.put('/:passengerId', updatePassenger);
passengersRouter.delete('/:passengerId', deletePassenger)

export default passengersRouter;
