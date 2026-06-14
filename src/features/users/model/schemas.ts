import { z } from "zod";

// Schema kiem tra form them/sua cong chuc.
// Thong bao loi bang tieng Viet co dau de hien thi truc tiep.
export const userFormSchema = z.object({
  staffCode: z
    .string()
    .min(1, "Vui lòng nhập mã công chức")
    .max(20, "Mã công chức tối đa 20 ký tự"),
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ và tên")
    .max(100, "Họ và tên tối đa 100 ký tự"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email công vụ")
    .email("Email không hợp lệ"),
  phone: z
    .string()
    .regex(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ")
    .optional()
    .or(z.literal("")),
  department: z.string().min(1, "Vui lòng chọn phòng/ban"),
  position: z.string().min(1, "Vui lòng nhập chức vụ"),
  role: z.enum(["admin", "instructor", "manager", "learner"], {
    errorMap: () => ({ message: "Vui lòng chọn vai trò" }),
  }),
});

// Kieu suy ra tu schema
export type UserFormSchema = z.infer<typeof userFormSchema>;