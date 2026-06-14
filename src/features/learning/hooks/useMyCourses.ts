import { useQuery } from "@tanstack/react-query";
import { learningService } from "../services/learningService";

// Khoa cache danh sach khoa hoc cua hoc vien
export const MY_COURSES_KEY = "my-courses";

// Hook lay danh sach khoa hoc cua hoc vien hien tai ("Khoa hoc cua toi").
export function useMyCourses() {
  const query = useQuery({
    queryKey: [MY_COURSES_KEY],
    queryFn: () => learningService.getMyCourses(),
  });

  return {
    courses: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
}