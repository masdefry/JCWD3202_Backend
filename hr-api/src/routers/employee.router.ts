import { Router } from 'express';
import { createEmployeeProfile, findEmployeeProfile } from '../controllers/employee.controller';
import { uploader } from '../middlewares/uploader';
import { jwtDecode } from '../middlewares/jwt.decode';

const employeeRouter = Router();

employeeRouter.post(
  '/',
  uploader(['image/jpg', 'image/jpeg', 'image/png', 'image/webp']).fields([
    { name: 'images', maxCount: 3 },
  ]),
  jwtDecode,
  createEmployeeProfile
);

employeeRouter.get('/', jwtDecode, findEmployeeProfile)

export default employeeRouter;
