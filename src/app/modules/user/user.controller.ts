import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
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

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserRegistrationService.updateUserIntoDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User updated successfully ',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await UserRegistrationService.getAllUserFromDB(query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User fetched successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserRegistrationService.getSingleUserFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User is retrieved successfully',
    data: result,
  });
});

export const UserController = {
  userRegistration,
  updateUser,
  getAllUser,
  getSingleUser,
};
