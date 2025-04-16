import { Router } from 'express';
import { clockInAttendance } from '../controllers/attendances.controller';
import { jwtDecode } from '../middlewares/jwt.decode';

const attendancesRouter = Router();

attendancesRouter.post('/clock-in', jwtDecode, clockInAttendance);

export default attendancesRouter;
