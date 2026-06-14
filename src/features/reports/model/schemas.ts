import { z } from "zod";

// Schema tham so loc bao cao.
export const reportFiltersSchema = z.object({
  type: z.enum([
    "course_completion",
    "department_summary",
    "quiz_results",
    "learner_activity",
  ]),
  months: z.number().min(1).max(12),
  department: z.string().optional(),
});

export type ReportFiltersSchema = z.infer<typeof reportFiltersSchema>;