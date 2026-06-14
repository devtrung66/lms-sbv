import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module departments.
export const DEPARTMENT_ENDPOINTS = {
  list: "/departments",
  detail: (id: string) => buildPath("/departments/:id", { id }),
  create: "/departments",
  update: (id: string) => buildPath("/departments/:id", { id }),
  delete: (id: string) => buildPath("/departments/:id", { id }),
  // Thong ke phong/ban (cho bang o trang quan tri nguoi dung)
  stats: "/departments/stats",
} as const;