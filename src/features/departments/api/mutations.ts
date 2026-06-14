import { apiClient } from "@/core/api/client";
import { DEPARTMENT_ENDPOINTS } from "./endpoints";
import type { RawDepartment } from "./queries";
import type { DepartmentFormValues } from "../model/types";

// Chuyen du lieu form sang body backend (snake_case)
function toRequestBody(values: DepartmentFormValues): Record<string, unknown> {
  return {
    name: values.name,
    code: values.code,
    manager_name: values.managerName,
  };
}

// Tao moi phong/ban
export function createDepartment(values: DepartmentFormValues): Promise<RawDepartment> {
  return apiClient.post<RawDepartment>(DEPARTMENT_ENDPOINTS.create, toRequestBody(values));
}

// Cap nhat phong/ban
export function updateDepartment(
  id: string,
  values: DepartmentFormValues
): Promise<RawDepartment> {
  return apiClient.put<RawDepartment>(DEPARTMENT_ENDPOINTS.update(id), toRequestBody(values));
}

// Xoa phong/ban
export function deleteDepartment(id: string): Promise<void> {
  return apiClient.delete<void>(DEPARTMENT_ENDPOINTS.delete(id));
}