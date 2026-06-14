import { apiClient } from "@/core/api/client";
import { USER_ENDPOINTS } from "./endpoints";
import type { RawStaffUser } from "./queries";
import type { UserFormValues } from "../model/types";

// Ket qua nhap Excel tra ve tu backend
export interface ImportResult {
  // So ban ghi nhap thanh cong
  succeeded: number;
  // So ban ghi loi
  failed: number;
  // Danh sach thong bao loi theo dong
  errors: { row: number; message: string }[];
}

// Chuyen du lieu form (camelCase) thanh body backend (snake_case)
function toRequestBody(values: UserFormValues): Record<string, unknown> {
  return {
    staff_code: values.staffCode,
    full_name: values.fullName,
    email: values.email,
    phone: values.phone,
    department: values.department,
    position: values.position,
    role: values.role,
  };
}

// Tao moi cong chuc
export function createUser(values: UserFormValues): Promise<RawStaffUser> {
  return apiClient.post<RawStaffUser>(USER_ENDPOINTS.create, toRequestBody(values));
}

// Cap nhat thong tin cong chuc
export function updateUser(id: string, values: UserFormValues): Promise<RawStaffUser> {
  return apiClient.put<RawStaffUser>(USER_ENDPOINTS.update(id), toRequestBody(values));
}

// Xoa cong chuc
export function deleteUser(id: string): Promise<void> {
  return apiClient.delete<void>(USER_ENDPOINTS.delete(id));
}

// Khoa tai khoan
export function lockUser(id: string): Promise<void> {
  return apiClient.post<void>(USER_ENDPOINTS.lock(id));
}

// Mo khoa tai khoan
export function unlockUser(id: string): Promise<void> {
  return apiClient.post<void>(USER_ENDPOINTS.unlock(id));
}

// Nhap danh sach cong chuc tu file Excel (gui FormData)
export function importUsersFromExcel(file: File): Promise<ImportResult> {
  const formData = new FormData();
  formData.append("file", file);
  // Gui truc tiep qua fetch vi day la FormData, khong phai JSON
  return apiClient.post<ImportResult>(USER_ENDPOINTS.importExcel, formData);
}