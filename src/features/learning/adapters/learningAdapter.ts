import type { Lesson, LessonType } from "@/features/courses";
import type {
  EnrolledCourse,
  EnrollmentStatus,
  LessonProgress,
  CourseRoom,
} from "../model/types";
import type {
  RawEnrolledCourse,
  RawLessonProgress,
  RawRoomLesson,
  RawCourseRoom,
} from "../api/queries";

// Chuyen trang thai hoc dang chuoi sang kieu co kiem soat
function mapStatus(raw: string): EnrollmentStatus {
  const value = raw.toLowerCase();
  if (value === "completed") return "completed";
  if (value === "in_progress") return "in_progress";
  return "not_started";
}

// Chuyen loai bai hoc dang chuoi sang kieu co kiem soat
function mapLessonType(raw: string): LessonType {
  const value = raw.toLowerCase();
  if (value === "video") return "video";
  if (value === "slide") return "slide";
  return "document";
}

// Mapping khoa hoc cua hoc vien
export function toEnrolledCourse(raw: RawEnrolledCourse): EnrolledCourse {
  return {
    id: raw.id,
    courseId: raw.course_id,
    title: raw.title,
    thumbnailUrl: raw.thumbnail_url,
    status: mapStatus(raw.status),
    progressPercent: raw.progress_percent,
    completedLessons: raw.completed_lessons,
    totalLessons: raw.total_lessons,
    hasFinalQuiz: raw.has_final_quiz,
  };
}

// Mapping bai hoc trong phong hoc
function toRoomLesson(raw: RawRoomLesson): Lesson {
  return {
    id: raw.id,
    title: raw.title,
    type: mapLessonType(raw.type),
    mediaUrl: raw.media_url,
    durationSeconds: raw.duration_seconds,
    order: raw.order,
  };
}

// Mapping tien do mot bai
function toLessonProgress(raw: RawLessonProgress): LessonProgress {
  return {
    lessonId: raw.lesson_id,
    completed: raw.completed,
    lastPositionSeconds: raw.last_position_seconds,
  };
}

// Mapping toan bo phong hoc, dua tien do ve dang tra cuu theo lessonId
export function toCourseRoom(raw: RawCourseRoom): CourseRoom {
  const progressMap: Record<string, LessonProgress> = {};
  for (const p of raw.lesson_progress) {
    progressMap[p.lesson_id] = toLessonProgress(p);
  }
  return {
    course: toEnrolledCourse(raw.course),
    lessons: raw.lessons.map(toRoomLesson).sort((a, b) => a.order - b.order),
    lessonProgress: progressMap,
  };
}