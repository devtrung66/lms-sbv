import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module roles.
export const ROLE_ENDPOINTS = {
  list: "/roles",
  detail: (id: string) => buildPath("/roles/:id", { id }),
  create: "/roles",
  update: (id: string) => buildPath("/roles/:id", { id }),
  delete: (id: string) => buildPath("/roles/:id", { id }),
  // Danh muc quyen tu backend (neu co, neu khong dung PERMISSION_CATALOG)
  permissions: "/roles/permissions",
} as const;