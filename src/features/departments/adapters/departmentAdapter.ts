import type { Department, DepartmentStat } from "../model/types";
import type { RawDepartment, RawDepartmentStat } from "../api/queries";

// Mapping mot phong/ban: raw (snake_case) -> model (camelCase)
export function toDepartment(raw: RawDepartment): Department {
  return {
    id: raw.id,
    name: raw.name,
    code: raw.code,
    staffCount: raw.staff_count,
    activeStaffCount: raw.active_staff_count,
    completionRate: raw.completion_rate,
    managerName: raw.manager_name,
    createdAt: raw.created_at,
  };
}

// Mapping thong ke phong/ban
export function toDepartmentStat(raw: RawDepartmentStat): DepartmentStat {
  return {
    name: raw.name,
    staffCount: raw.staff_count,
    activeStaffCount: raw.active_staff_count,
    completionRate: raw.completion_rate,
  };
}