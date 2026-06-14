import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { roleService } from "../services/roleService";
import { roleActions } from "../state/actions";
import { useDraftPermissions } from "../state/selectors";
import { ROLE_LIST_KEY } from "./useRoleList";
import type { Role } from "../model/types";

// Hook quan ly ma tran quyen cho mot vai tro:
// lay quyen hien tai (uu tien ban nhap), bat/tat, va luu len backend.
export function usePermissionMatrix(role: Role) {
  const queryClient = useQueryClient();
  const draft = useDraftPermissions(role.id);

  // Quyen dang hien thi: ban nhap neu co, neu khong la quyen goc cua vai tro
  const currentPermissions = draft ?? role.permissionIds;

  // Kiem tra vai tro co mot quyen hay khong
  const hasPermission = useCallback(
    (permissionId: string): boolean => currentPermissions.includes(permissionId),
    [currentPermissions]
  );

  // Bat/tat mot quyen (cap nhat ban nhap)
  const toggle = useCallback(
    (permissionId: string): void => {
      // Khoi tao ban nhap tu quyen goc neu chua co
      if (!draft) {
        roleActions.initDraft(role.id, role.permissionIds);
      }
      roleActions.togglePermission(role.id, permissionId);
    },
    [draft, role.id, role.permissionIds]
  );

  // Co thay doi chua luu hay khong
  const isDirty = draft !== undefined;

  // Luu ban nhap len backend
  const saveMutation = useMutation({
    mutationFn: () =>
      roleService.update(role.id, {
        code: role.code,
        name: role.name,
        description: role.description,
        permissionIds: currentPermissions,
      }),
    onSuccess: () => {
      roleActions.clearDraft(role.id);
      void queryClient.invalidateQueries({ queryKey: [ROLE_LIST_KEY] });
    },
  });

  return {
    hasPermission,
    toggle,
    isDirty,
    save: saveMutation.mutate,
    isSaving: saveMutation.isPending,
  };
}