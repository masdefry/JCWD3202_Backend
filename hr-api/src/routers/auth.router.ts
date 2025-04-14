import { Router } from 'express';
const authRouter = Router();
import {
  registerEmployee,
  loginEmployee,
  sessionLoginEmployee,
} from '../controllers/auth.controller';
import { registerEmployeeValidator } from '../middlewares/express.validator/auth.validator';
import { errorValidatorHandler } from '../middlewares/express.validator/error.handler';
import { jwtDecode } from '../middlewares/jwt.decode';
import { hrOnly } from '../middlewares/auth.guard/hrOnly';

authRouter.post(
  '/register',
  jwtDecode, 
  hrOnly, 
  registerEmployeeValidator,
  errorValidatorHandler,
  registerEmployee
);
authRouter.post('/login', loginEmployee);
authRouter.get('/session-login', jwtDecode, sessionLoginEmployee);

export default authRouter;
