import { useRoleStore } from "./store";

// Lay id vai tro dang chon
export function useSelectedRoleId(): string | null {
  return useRoleStore((state) => state.selectedRoleId);
}

// Lay ban nhap quyen cua mot vai tro (undefined neu chua chinh)
export function useDraftPermissions(roleId: string): string[] | undefined {
  return useRoleStore((state) => state.draftPermissions[roleId]);
}