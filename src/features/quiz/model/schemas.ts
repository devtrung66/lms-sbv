import { z } from "zod";

// Schema mot cau tra loi cua hoc vien
export const userAnswerSchema = z.object({
  questionId: z.string().min(1),
  selectedOptionIds: z.array(z.string()),
});

// Schema bai lam gui len khi nop
export const quizSubmissionSchema = z.object({
  quizId: z.string().min(1),
  answers: z.array(userAnswerSchema),
  startedAt: z.string(),
});

export type QuizSubmission = z.infer<typeof quizSubmissionSchema>;