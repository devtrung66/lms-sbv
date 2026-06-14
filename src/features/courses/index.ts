// API cong khai cua module courses.
// Cac module khac chi import tu day.

// Hooks
export { useCourseList } from "./hooks/useCourseList";
export { useCourseDetail } from "./hooks/useCourseDetail";
export { useCourseMutation } from "./hooks/useCourseMutation";
export { useMediaUpload } from "./hooks/useMediaUpload";

// Service (dung cho module khac, vd learning lay danh sach bai hoc)
export { courseService } from "./services/courseService";
export { lessonService } from "./services/lessonService";

// Kieu du lieu cong khai
export type { Course, Lesson, CourseStatus, LessonType } from "./model/types";