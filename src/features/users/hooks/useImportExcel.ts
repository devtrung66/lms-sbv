import { useMutation, useQueryClient } from "@tanstack/react-query";
import { importService } from "../services/importService";
import { USER_LIST_KEY } from "./useUserList";

// Hook xu ly nhap danh sach cong chuc tu file Excel.
// Tu lam moi danh sach sau khi nhap xong.
export function useImportExcel() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (file: File) => importService.upload(file),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [USER_LIST_KEY] });
    },
  });

  return {
    importFile: mutation.mutateAsync,
    isImporting: mutation.isPending,
    result: mutation.data,
    error: mutation.error,
    reset: mutation.reset,
  };
}