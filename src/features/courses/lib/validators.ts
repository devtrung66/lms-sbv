import { courseFormSchema } from "../model/schemas";
import type { CourseFormValues } from "../model/types";

// Ket qua kiem tra form khoa hoc
export type CourseValidationResult =
  | { valid: true }
  | { valid: false; errors: Partial<Record<keyof CourseFormValues, string>> };

// Kiem tra form tao/sua khoa hoc dua tren schema zod.
export function validateCourseForm(values: CourseFormValues): CourseValidationResult {
  const result = courseFormSchema.safeParse(values);
  if (result.success) {
    return { valid: true };
  }

  const errors: Partial<Record<keyof CourseFormValues, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof CourseFormValues;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return { valid: false, errors };
}