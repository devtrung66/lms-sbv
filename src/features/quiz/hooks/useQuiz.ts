import { useQuery } from "@tanstack/react-query";
import { quizService } from "../services/quizService";

// Khoa cache de bai kiem tra
export const QUIZ_KEY = "quiz";

// Hook lay de bai kiem tra theo id.
export function useQuiz(quizId: string | null) {
  const query = useQuery({
    queryKey: [QUIZ_KEY, quizId],
    queryFn: () => quizService.getQuiz(quizId as string),
    enabled: quizId !== null,
    // De bai khong doi trong mot lan lam, khong can refetch
    staleTime: Infinity,
  });

  return {
    quiz: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}