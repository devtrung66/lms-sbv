// API cong khai cua module learning.
export { useMyCourses } from "./hooks/useMyCourses";
export { useLessonPlayer } from "./hooks/useLessonPlayer";
export { useProgressSync } from "./hooks/useProgressSync";
export { learningService } from "./services/learningService";

// Thanh phan UI dung lai o module khac
export { ProgressBar } from "./ui/components/ProgressBar";
export { CompletionBadge } from "./ui/components/CompletionBadge";

export type {
  EnrolledCourse,
  EnrollmentStatus,
  LessonProgress,
  CourseRoom,
} from "./model/types";