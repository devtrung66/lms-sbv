import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { USER_LIST_KEY } from "./useUserList";
import type { UserFormValues } from "../model/types";

// Hook gom cac thao tac ghi (tao/sua/xoa/khoa) cong chuc.
// Sau moi thao tac thanh cong se lam moi danh sach.
export function useUserMutation() {
  const queryClient = useQueryClient();

  // Lam moi danh sach sau khi thay doi du lieu
  function invalidateList(): void {
    void queryClient.invalidateQueries({ queryKey: [USER_LIST_KEY] });
  }

  const createMutation = useMutation({
    mutationFn: (values: UserFormValues) => userService.create(values),
    onSuccess: invalidateList,
  });

  const updateMutation = useMutation({
    mutationFn: (input: { id: string; values: UserFormValues }) =>
      userService.update(input.id, input.values),
    onSuccess: invalidateList,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => userService.remove(id),
    onSuccess: invalidateList,
  });

  const lockMutation = useMutation({
    mutationFn: (input: { id: string; lock: boolean }) =>
      input.lock ? userService.lock(input.id) : userService.unlock(input.id),
    onSuccess: invalidateList,
  });

  return {
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
    toggleLock: lockMutation,
  };
}