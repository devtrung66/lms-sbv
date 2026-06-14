import { apiClient } from "@/core/api/client";
import { ROLE_ENDPOINTS } from "./endpoints";
import type { RawRole } from "./queries";
import type { RoleFormValues } from "../model/types";

// Chuyen du lieu form sang body backend (snake_case)
function toRequestBody(values: RoleFormValues): Record<string, unknown> {
  return {
    code: values.code,
    name: values.name,
    description: values.description,
    permission_ids: values.permissionIds,
  };
}

// Tao moi vai tro
export function createRole(values: RoleFormValues): Promise<RawRole> {
  return apiClient.post<RawRole>(ROLE_ENDPOINTS.create, toRequestBody(values));
}

// Cap nhat vai tro (gom cap nhat danh sach quyen)
export function updateRole(id: string, values: RoleFormValues): Promise<RawRole> {
  return apiClient.put<RawRole>(ROLE_ENDPOINTS.update(id), toRequestBody(values));
}

// Xoa vai tro
export function deleteRole(id: string): Promise<void> {
  return apiClient.delete<void>(ROLE_ENDPOINTS.delete(id));
}