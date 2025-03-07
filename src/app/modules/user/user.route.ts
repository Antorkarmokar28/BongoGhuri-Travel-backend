import { Router } from 'express';
import { UserValidation } from './user.validation';
import { UserController } from './user.controller';
import validationRequest from '../../middlewares/validationRequest';
// user create route
const router = Router();
router.post(
  '/register',
  validationRequest(UserValidation.userRegistrationSchema),
  UserController.userRegistration
);
//update spesific user route
router.patch(
  '/:id',
  validationRequest(UserValidation.updateUserRegistrationSchema),
  UserController.updateUser
);
// get all user route
router.get('/', UserController.getAllUser);
// get single user route
router.get('/:id', UserController.getSingleUser);
export const userRouter = router;
