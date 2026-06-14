import { useQuery } from "@tanstack/react-query";
import { courseService } from "../services/courseService";
import { lessonService } from "../services/lessonService";

// Khoa cache chi tiet khoa hoc va danh sach bai hoc
export const COURSE_DETAIL_KEY = "course-detail";
export const COURSE_LESSONS_KEY = "course-lessons";

// Hook lay chi tiet khoa hoc kem danh sach bai hoc.
// Chi goi khi co courseId hop le.
export function useCourseDetail(courseId: string | null) {
  const courseQuery = useQuery({
    queryKey: [COURSE_DETAIL_KEY, courseId],
    queryFn: () => courseService.getDetail(courseId as string),
    enabled: courseId !== null,
  });

  const lessonsQuery = useQuery({
    queryKey: [COURSE_LESSONS_KEY, courseId],
    queryFn: () => lessonService.getByCourse(courseId as string),
    enabled: courseId !== null,
  });

  return {
    course: courseQuery.data,
    lessons: lessonsQuery.data ?? [],
    isLoading: courseQuery.isLoading || lessonsQuery.isLoading,
    isError: courseQuery.isError || lessonsQuery.isError,
  };
}