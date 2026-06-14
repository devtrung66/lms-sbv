import { useMutation, useQueryClient } from "@tanstack/react-query";
import { roleService } from "../services/roleService";
import { ROLE_LIST_KEY } from "./useRoleList";
import type { RoleFormValues } from "../model/types";

// Hook gom cac thao tac ghi (tao/sua/xoa) vai tro.
export function useRoleMutation() {
  const queryClient = useQueryClient();

  function invalidate(): void {
    void queryClient.invalidateQueries({ queryKey: [ROLE_LIST_KEY] });
  }

  const createMutation = useMutation({
    mutationFn: (values: RoleFormValues) => roleService.create(values),
    onSuccess: invalidate,
  });

  const updateMutation = useMutation({
    mutationFn: (input: { id: string; values: RoleFormValues }) =>
      roleService.update(input.id, input.values),
    onSuccess: invalidate,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => roleService.remove(id),
    onSuccess: invalidate,
  });

  return {
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
  };
}