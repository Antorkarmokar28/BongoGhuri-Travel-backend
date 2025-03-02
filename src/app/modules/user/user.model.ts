import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../config';
import { IUser } from './user.interface';

const userResgistrationSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  }
);
// this function using for user password hashed
userResgistrationSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});
userResgistrationSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<IUser>('User', userResgistrationSchema);
