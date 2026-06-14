import type { Lesson, LessonType } from "../model/types";
import type { RawLesson } from "../api/queries";

// Chuyen loai bai hoc dang chuoi sang kieu co kiem soat
function mapLessonType(raw: string): LessonType {
  const value = raw.toLowerCase();
  if (value === "video") return "video";
  if (value === "slide") return "slide";
  return "document";
}

// Mapping mot bai hoc: raw (snake_case) -> model (camelCase)
export function toLesson(raw: RawLesson): Lesson {
  return {
    id: raw.id,
    title: raw.title,
    type: mapLessonType(raw.type),
    mediaUrl: raw.media_url,
    durationSeconds: raw.duration_seconds,
    order: raw.order,
  };
}

// Mapping danh sach bai hoc, sap xep theo thu tu hien thi
export function toLessonList(raws: RawLesson[]): Lesson[] {
  return raws.map(toLesson).sort((a, b) => a.order - b.order);
}