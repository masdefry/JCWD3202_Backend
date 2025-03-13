import { Router } from 'express';
const passengersRouter = Router();
import { createPassenger, findPassengers } from '../controllers/passengers.controller';

passengersRouter.get('/', findPassengers);
passengersRouter.post('/', createPassenger)

export default passengersRouter;
