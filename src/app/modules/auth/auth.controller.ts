import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const userLogin = catchAsync(async (req, res) => {
  const result = await AuthService.userLoginIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User login is successfully',
    data: {
      token: result?.token,
    },
  });
});

export const AuthController = {
  userLogin,
};
