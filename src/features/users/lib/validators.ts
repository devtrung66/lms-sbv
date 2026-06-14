import { userFormSchema } from "../model/schemas";
import type { UserFormValues } from "../model/types";

// Ket qua kiem tra form them/sua cong chuc
export type UserValidationResult =
  | { valid: true }
  | { valid: false; errors: Partial<Record<keyof UserFormValues, string>> };

// Kiem tra form dua tren schema zod, tra ve loi theo tung truong.
export function validateUserForm(values: UserFormValues): UserValidationResult {
  const result = userFormSchema.safeParse(values);
  if (result.success) {
    return { valid: true };
  }

  const errors: Partial<Record<keyof UserFormValues, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof UserFormValues;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return { valid: false, errors };
}