import { useMutation, useQueryClient } from "@tanstack/react-query";
import { settingsService } from "../services/settingsService";
import { SETTINGS_KEY } from "./useSettings";
import type { SettingsFormValues } from "../model/types";

// Hook cap nhat cau hinh he thong.
export function useSettingsMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values: SettingsFormValues) => settingsService.update(values),
    onSuccess: (data) => {
      // Cap nhat lai cache cau hinh ngay sau khi luu
      queryClient.setQueryData([SETTINGS_KEY], data);
    },
  });

  return {
    save: mutation.mutateAsync,
    isSaving: mutation.isPending,
    isSuccess: mutation.isSuccess,
    reset: mutation.reset,
  };
}