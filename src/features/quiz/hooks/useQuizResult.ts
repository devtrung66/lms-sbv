import { useQuery } from "@tanstack/react-query";
import { quizService } from "../services/quizService";
import { attemptService } from "../services/attemptService";

// Khoa cache danh sach ket qua
export const QUIZ_RESULTS_KEY = "quiz-results";

// Hook lay danh sach ket qua cac lan lam + lan tot nhat.
export function useQuizResult(quizId: string | null) {
  const query = useQuery({
    queryKey: [QUIZ_RESULTS_KEY, quizId],
    queryFn: () => quizService.getResults(quizId as string),
    enabled: quizId !== null,
  });

  const results = query.data ?? [];

  return {
    results,
    best: attemptService.bestResult(results),
    isLoading: query.isLoading,
    isError: query.isError,
  };
}