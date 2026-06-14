// API cong khai cua module departments.
export { useDepartmentList, useDepartmentStats } from "./hooks/useDepartmentList";
export { useDepartmentMutation } from "./hooks/useDepartmentMutation";
export { departmentService } from "./services/departmentService";

// Thanh phan UI dung lai o trang quan tri nguoi dung (anh 2)
export { DepartmentStatsTable } from "./ui/components/DepartmentStatsTable";

export type { Department, DepartmentStat, DepartmentFormValues } from "./model/types";