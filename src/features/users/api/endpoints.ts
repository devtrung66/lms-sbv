import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module users.
export const USER_ENDPOINTS = {
  list: "/users",
  stats: "/users/stats",
  detail: (id: string) => buildPath("/users/:id", { id }),
  create: "/users",
  update: (id: string) => buildPath("/users/:id", { id }),
  delete: (id: string) => buildPath("/users/:id", { id }),
  // Khoa / mo khoa tai khoan
  lock: (id: string) => buildPath("/users/:id/lock", { id }),
  unlock: (id: string) => buildPath("/users/:id/unlock", { id }),
  // Nhap danh sach cong chuc tu file Excel
  importExcel: "/users/import",
} as const;