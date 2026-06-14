import { z } from "zod";

// Schema kiem tra form tao/sua vai tro.
export const roleFormSchema = z.object({
  code: z
    .string()
    .min(1, "Vui lòng nhập mã vai trò")
    .regex(/^[a-z_]+$/, "Mã vai trò chỉ gồm chữ thường và dấu gạch dưới"),
  name: z.string().min(1, "Vui lòng nhập tên vai trò"),
  description: z.string().optional().or(z.literal("")),
  permissionIds: z.array(z.string()),
});

export type RoleFormSchema = z.infer<typeof roleFormSchema>;