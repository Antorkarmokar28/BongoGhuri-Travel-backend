import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { UserRegistrationService } from './user.service';
import StatusCodes from 'http-status-codes';

const userRegistration = catchAsync(async (req, res) => {
  const result = await UserRegistrationService.userRegistrationIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registration successfully',
    data: result,
  });
});

export const UserController = {
  userRegistration,
};
