import { z } from 'zod';

const userRegistrationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['user', 'admin']).default('user'),
    isDeleted: z.boolean().default(false),
    status: z.string().default('in-progress'),
  }),
});

export const UserValidation = {
  userRegistrationSchema,
};
