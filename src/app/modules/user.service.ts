import { StatusCodes } from 'http-status-codes';
import { IUser } from './user.interface';
import { User } from './user.model';
import AppError from '../error/appError';

const userRegistrationIntoDB = async (payload: IUser) => {
  const isUserExists = await User.findOne({ email: payload.email });
  if (isUserExists) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'This email address is already exists'
    );
  }
  const result = await User.create(payload);
  return result;
};

export const UserRegistrationService = {
  userRegistrationIntoDB,
};
