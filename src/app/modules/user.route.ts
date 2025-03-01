import { Router } from 'express';
import { UserValidation } from './user.validation';
import validationRequest from '../middlewares/validationRequest';
import { UserController } from './user.controller';

const router = Router();
router.post(
  '/register',
  validationRequest(UserValidation.userRegistrationSchema),
  UserController.userRegistration
);

export const userRouter = router;
