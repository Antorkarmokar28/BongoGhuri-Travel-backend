import { Router } from 'express';
import { userLoginSchema } from './auth.validation';
import validationRequest from '../../middlewares/validationRequest';
import { AuthController } from './auth.controller';

const router = Router();
router.post(
  '/user-login',
  validationRequest(userLoginSchema),
  AuthController.userLogin
);

export const authRouter = router;
