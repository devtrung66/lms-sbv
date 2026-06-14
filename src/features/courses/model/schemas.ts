import { z } from "zod";

// Schema kiem tra form tao/sua khoa hoc.
export const courseFormSchema = z.object({
  title: z
    .string()
    .min(1, "Vui lòng nhập tên khóa học")
    .max(200, "Tên khóa học tối đa 200 ký tự"),
  description: z
    .string()
    .max(2000, "Mô tả tối đa 2000 ký tự")
    .optional()
    .or(z.literal("")),
  hasFinalQuiz: z.boolean(),
});

export type CourseFormSchema = z.infer<typeof courseFormSchema>;