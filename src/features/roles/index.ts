// API cong khai cua module roles.
export { useRoleList } from "./hooks/useRoleList";
export { useRoleMutation } from "./hooks/useRoleMutation";
export { usePermissionMatrix } from "./hooks/usePermissionMatrix";
export { roleService } from "./services/roleService";
export { permissionService } from "./services/permissionService";

export type { Role, Permission, RoleFormValues } from "./model/types";