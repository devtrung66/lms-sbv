import { useState, useEffect, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { quizService } from "../services/quizService";
import { attemptService } from "../services/attemptService";
import { quizActions } from "../state/actions";
import { useQuizStore } from "../state/store";
import type { Quiz } from "../model/types";

// Hook quan ly mot lan lam bai: dem nguoc thoi gian + nop bai (tu dong khi het gio).
export function useQuizAttempt(quiz: Quiz) {
  const startedAt = useQuizStore((state) => state.startedAt);
  const answers = useQuizStore((state) => state.answers);
  const setResult = useQuizStore((state) => state.setResult);
  const [remaining, setRemaining] = useState<number>(() =>
    quiz.durationMinutes > 0 ? quiz.durationMinutes * 60 : Infinity
  );

  // Mutation nop bai
  const submitMutation = useMutation({
    mutationFn: () => {
      const submission = {
        quizId: quiz.id,
        startedAt: startedAt ?? new Date().toISOString(),
        answers: Object.values(answers),
      };
      return quizService.submit(submission);
    },
    onSuccess: (result) => setResult(result),
  });

  // Ham nop bai (dung chung cho nut nop va tu dong nop)
  const submit = useCallback((): void => {
    if (!submitMutation.isPending && !submitMutation.isSuccess) {
      submitMutation.mutate();
    }
  }, [submitMutation]);

  // Dem nguoc thoi gian lam bai
  useEffect(() => {
    if (!startedAt || quiz.durationMinutes <= 0) return;

    const timer = window.setInterval(() => {
      const left = attemptService.remainingSeconds(startedAt, quiz.durationMinutes);
      setRemaining(left);
      // Het gio thi tu dong nop
      if (left <= 0) {
        window.clearInterval(timer);
        submit();
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [startedAt, quiz.durationMinutes, submit]);

  return {
    remaining,
    submit,
    isSubmitting: submitMutation.isPending,
    isSubmitted: submitMutation.isSuccess,
  };
}