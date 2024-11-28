import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email().max(255),
  username: z.string().max(255),
  role: z.enum(['customer', 'admin']),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;