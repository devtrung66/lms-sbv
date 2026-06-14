import { progressUpdateSchema, type ProgressUpdate } from "../model/schemas";

// Kiem tra du lieu tien do truoc khi dong bo len backend.
// Tra ve true neu hop le, dung de chan goi API thua.
export function isValidProgressUpdate(update: ProgressUpdate): boolean {
  return progressUpdateSchema.safeParse(update).success;
}