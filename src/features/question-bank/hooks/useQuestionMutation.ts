import { useMutation, useQueryClient } from "@tanstack/react-query";
import { questionService } from "../services/questionService";
import { QUESTION_LIST_KEY } from "./useQuestionList";
import { questionBankActions } from "../state/actions";
import type { QuestionFormValues } from "../model/types";

// Hook gom cac thao tac ghi (tao/sua/xoa) cau hoi.
// Tu lam moi danh sach va dong form sau khi thanh cong.
export function useQuestionMutation() {
  const queryClient = useQueryClient();

  function onDone(): void {
    void queryClient.invalidateQueries({ queryKey: [QUESTION_LIST_KEY] });
    questionBankActions.closeForm();
  }

  const createMutation = useMutation({
    mutationFn: (values: QuestionFormValues) => questionService.create(values),
    onSuccess: onDone,
  });

  const updateMutation = useMutation({
    mutationFn: (input: { id: string; values: QuestionFormValues }) =>
      questionService.update(input.id, input.values),
    onSuccess: onDone,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => questionService.remove(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUESTION_LIST_KEY] }),
  });

  return {
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
  };
}