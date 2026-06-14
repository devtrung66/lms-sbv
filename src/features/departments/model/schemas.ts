import { z } from "zod";
import { MAX_CODE_LENGTH } from "./constants";

// Schema kiem tra form tao/sua phong/ban.
export const departmentFormSchema = z.object({
  name: z
    .string()
    .min(1, "Vui lòng nhập tên phòng/ban")
    .max(100, "Tên phòng/ban tối đa 100 ký tự"),
  code: z
    .string()
    .min(1, "Vui lòng nhập mã phòng/ban")
    .max(MAX_CODE_LENGTH, `Mã phòng/ban tối đa ${MAX_CODE_LENGTH} ký tự`),
  managerName: z.string().optional().or(z.literal("")),
});

export type DepartmentFormSchema = z.infer<typeof departmentFormSchema>;