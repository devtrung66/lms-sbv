import { z } from "zod";
import { MIN_OPTIONS, MAX_OPTIONS } from "./constants";

// Schema mot lua chon dap an
const optionSchema = z.object({
  id: z.string(),
  content: z.string().min(1, "Nội dung đáp án không được để trống"),
  isCorrect: z.boolean(),
});

// Schema form tao/sua cau hoi.
// Rang buoc: phai co it nhat MIN_OPTIONS dap an va it nhat 1 dap an dung.
export const questionFormSchema = z
  .object({
    content: z.string().min(1, "Vui lòng nhập nội dung câu hỏi"),
    type: z.enum(["single_choice", "multiple_choice", "true_false"]),
    options: z
      .array(optionSchema)
      .min(MIN_OPTIONS, `Cần ít nhất ${MIN_OPTIONS} đáp án`)
      .max(MAX_OPTIONS, `Tối đa ${MAX_OPTIONS} đáp án`),
    points: z.number().min(1, "Điểm phải lớn hơn 0"),
    topic: z.string().min(1, "Vui lòng chọn chủ đề"),
    difficulty: z.enum(["easy", "medium", "hard"]),
  })
  .refine(
    (data) => data.options.some((o) => o.isCorrect),
    { message: "Phải có ít nhất một đáp án đúng", path: ["options"] }
  );

export type QuestionFormSchema = z.infer<typeof questionFormSchema>;