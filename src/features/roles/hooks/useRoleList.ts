import { useQuery } from "@tanstack/react-query";
import { roleService } from "../services/roleService";
import { permissionService } from "../services/permissionService";

// Khoa cache danh sach vai tro va danh muc quyen
export const ROLE_LIST_KEY = "roles-list";
export const PERMISSION_CATALOG_KEY = "permission-catalog";

// Hook lay danh sach vai tro + danh muc quyen.
export function useRoleList() {
  const rolesQuery = useQuery({
    queryKey: [ROLE_LIST_KEY],
    queryFn: () => roleService.getList(),
  });

  const permissionsQuery = useQuery({
    queryKey: [PERMISSION_CATALOG_KEY],
    queryFn: () => permissionService.getCatalog(),
    staleTime: Infinity, // danh muc quyen it doi
  });

  return {
    roles: rolesQuery.data ?? [],
    permissions: permissionsQuery.data ?? [],
    isLoading: rolesQuery.isLoading || permissionsQuery.isLoading,
  };
}