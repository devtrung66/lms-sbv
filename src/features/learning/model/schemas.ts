import { z } from "zod";

// Schema du lieu dong bo tien do hoc gui len backend.
export const progressUpdateSchema = z.object({
  lessonId: z.string().min(1),
  completed: z.boolean(),
  lastPositionSeconds: z.number().min(0),
});

export type ProgressUpdate = z.infer<typeof progressUpdateSchema>;