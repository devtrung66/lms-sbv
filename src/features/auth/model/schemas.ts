import { z } from "zod";
import { MIN_PASSWORD_LENGTH, AUTH_MESSAGES } from "./constants";

// Schema kiem tra form dang nhap (che do mock: chap nhan moi email hop le).
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, AUTH_MESSAGES.required)
    .email(AUTH_MESSAGES.invalidEmail),
  password: z.string().min(MIN_PASSWORD_LENGTH, AUTH_MESSAGES.passwordTooShort),
});

export type LoginFormValues = z.infer<typeof loginSchema>;