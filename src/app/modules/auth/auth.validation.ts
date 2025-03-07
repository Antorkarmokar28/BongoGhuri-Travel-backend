import { z } from 'zod';
//user authenticate validation schema defination
export const userLoginSchema = z.object({
  body: z.object({
    email: z.string().email('Email is required'),
    password: z.string().min(6, 'Password is required'),
  }),
});
