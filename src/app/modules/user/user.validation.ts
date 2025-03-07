import { z } from 'zod';

const userRegistrationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['user', 'admin']).default('user'),
    isDeleted: z.boolean().default(false),
    status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  }),
});
const updateUserRegistrationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name is required').optional(),
    email: z.string().email('Invalid email format').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .optional(),
    role: z.enum(['user', 'admin']).default('user').optional(),
    isDeleted: z.boolean().default(false).optional(),
    status: z
      .enum(['in-progress', 'blocked'])
      .default('in-progress')
      .optional(),
  }),
});

export const UserValidation = {
  userRegistrationSchema,
  updateUserRegistrationSchema,
};
