import { Router } from 'express';
const authRouter = Router();
import { registerEmployee } from '../controllers/auth.controller';
import { registerEmployeeValidator } from '../middlewares/express.validator/auth.validator';
import { errorValidatorHandler } from '../middlewares/express.validator/error.handler';

authRouter.post('/register', registerEmployeeValidator, errorValidatorHandler, registerEmployee);

export default authRouter;
