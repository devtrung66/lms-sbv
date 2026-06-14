import { z } from "zod";
import { MIN_PASS_THRESHOLD, MAX_PASS_THRESHOLD } from "./constants";

// Schema kiem tra form cau hinh he thong.
export const settingsFormSchema = z.object({
  systemName: z.string().min(1, "Vui lòng nhập tên hệ thống").optional(),
  organizationName: z.string().min(1, "Vui lòng nhập đơn vị chủ quản").optional(),
  supportEmail: z.string().email("Email hỗ trợ không hợp lệ").optional(),
  passThreshold: z
    .number()
    .min(MIN_PASS_THRESHOLD, `Ngưỡng đạt tối thiểu ${MIN_PASS_THRESHOLD}%`)
    .max(MAX_PASS_THRESHOLD, `Ngưỡng đạt tối đa ${MAX_PASS_THRESHOLD}%`)
    .optional(),
  defaultMaxAttempts: z.number().min(1, "Số lần làm lại tối thiểu là 1").optional(),
  enableGoogleLogin: z.boolean().optional(),
  enableEmailNotification: z.boolean().optional(),
  autoLockInactiveDays: z.number().min(0, "Số ngày không hợp lệ").optional(),
});

export type SettingsFormSchema = z.infer<typeof settingsFormSchema>;