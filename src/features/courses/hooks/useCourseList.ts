import { useQuery } from "@tanstack/react-query";
import { courseService } from "../services/courseService";
import { useCourseFilters } from "../state/selectors";

// Khoa cache danh sach khoa hoc
export const COURSE_LIST_KEY = "courses-list";

// Hook lay danh sach khoa hoc theo bo loc hien tai.
export function useCourseList() {
  const filters = useCourseFilters();

  const query = useQuery({
    queryKey: [COURSE_LIST_KEY, filters],
    queryFn: () => courseService.getList(filters),
    placeholderData: (previous) => previous,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
  };
}