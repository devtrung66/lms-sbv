import type { Role, Permission } from "../model/types";
import type { RawRole, RawPermission } from "../api/queries";

// Mapping mot vai tro: raw (snake_case) -> model (camelCase)
export function toRole(raw: RawRole): Role {
  return {
    id: raw.id,
    code: raw.code,
    name: raw.name,
    description: raw.description,
    permissionIds: raw.permission_ids,
    userCount: raw.user_count,
    isSystem: raw.is_system,
  };
}

// Mapping mot quyen
export function toPermission(raw: RawPermission): Permission {
  return {
    id: raw.id,
    label: raw.label,
    group: raw.group,
  };
}