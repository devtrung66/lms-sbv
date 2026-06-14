// Dinh nghia duong dan API cua module progress.
export const PROGRESS_ENDPOINTS = {
  // Tong quan tien do hoc tap cua hoc vien hien tai
  summary: "/progress/summary",
  // Danh sach tien do tung khoa
  rows: "/progress/courses",
  // Du lieu bieu do ket qua theo thang
  trend: "/progress/trend",
} as const;