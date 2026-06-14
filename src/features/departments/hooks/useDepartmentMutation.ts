import { useMutation, useQueryClient } from "@tanstack/react-query";
import { departmentService } from "../services/departmentService";
import { DEPARTMENT_LIST_KEY } from "./useDepartmentList";
import { useDepartmentStore } from "../state/store";
import type { DepartmentFormValues } from "../model/types";

// Hook gom cac thao tac ghi (tao/sua/xoa) phong/ban.
export function useDepartmentMutation() {
  const queryClient = useQueryClient();
  const closeForm = useDepartmentStore((state) => state.closeForm);

  function onDone(): void {
    void queryClient.invalidateQueries({ queryKey: [DEPARTMENT_LIST_KEY] });
    closeForm();
  }

  const createMutation = useMutation({
    mutationFn: (values: DepartmentFormValues) => departmentService.create(values),
    onSuccess: onDone,
  });

  const updateMutation = useMutation({
    mutationFn: (input: { id: string; values: DepartmentFormValues }) =>
      departmentService.update(input.id, input.values),
    onSuccess: onDone,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => departmentService.remove(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [DEPARTMENT_LIST_KEY] }),
  });

  return {
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
  };
}