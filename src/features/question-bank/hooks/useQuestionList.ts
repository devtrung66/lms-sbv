import { useQuery } from "@tanstack/react-query";
import { questionService } from "../services/questionService";
import { useQuestionFilters } from "../state/selectors";

// Khoa cache danh sach cau hoi va chu de
export const QUESTION_LIST_KEY = "question-bank-list";
export const TOPICS_KEY = "question-bank-topics";

// Hook lay danh sach cau hoi theo bo loc + danh sach chu de.
export function useQuestionList() {
  const filters = useQuestionFilters();

  const listQuery = useQuery({
    queryKey: [QUESTION_LIST_KEY, filters],
    queryFn: () => questionService.getList(filters),
    placeholderData: (previous) => previous,
  });

  const topicsQuery = useQuery({
    queryKey: [TOPICS_KEY],
    queryFn: () => questionService.getTopics(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    data: listQuery.data,
    topics: topicsQuery.data ?? [],
    isLoading: listQuery.isLoading,
    isFetching: listQuery.isFetching,
  };
}