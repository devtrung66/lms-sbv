import { loginSchema } from "../model/schemas";
import type { LoginCredentials } from "../model/types";

// Ket qua kiem tra hop le: hoac thanh cong, hoac kem theo loi theo tung truong
export type ValidationResult =
  | { valid: true }
  | { valid: false; errors: Partial<Record<keyof LoginCredentials, string>> };

// Kiem tra form dang nhap dua tren schema zod.
// Tra ve loi theo tung truong de hien thi ngay duoi o nhap lieu.
export function validateLoginForm(values: LoginCredentials): ValidationResult {
  const result = loginSchema.safeParse(values);
  if (result.success) {
    return { valid: true };
  }

  const errors: Partial<Record<keyof LoginCredentials, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof LoginCredentials;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return { valid: false, errors };
}