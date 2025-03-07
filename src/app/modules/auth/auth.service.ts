import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

const userLoginIntoDB = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User is not found!');
  }
  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(StatusCodes.FORBIDDEN, 'Sorry user is blocked!');
  }
  const userIsDeleted = user?.isDeleted;
  if (userIsDeleted === true) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Sorry user is Deleted!');
  }
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  );
  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid credentials!');
  }
  const jwtpayload = {
    userEmail: user.email,
    role: user.role,
  };
  const token = jwt.sign(jwtpayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });
  return { token };
};

export const AuthService = {
  userLoginIntoDB,
};
