import { StatusCodes } from 'http-status-codes';
import { IUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../error/appError';
import { userSearchableFields } from './user.constant';
import QueryBuilder from '../../builders/QueryBuilder';
// create user into db
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
//update single spesifiq user into db
const updateUserIntoDB = async (id: string, payload: Partial<IUser>) => {
  const user = await User.findById(id);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
//get all user from db
const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await userQuery.modelQuery;
  return result;
};
// get single user from db
const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);
  //if check user not found
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }
  return user;
};

export const UserRegistrationService = {
  userRegistrationIntoDB,
  updateUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
