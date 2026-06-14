// Dinh nghia duong dan API cua module reports.
export const REPORT_ENDPOINTS = {
  // The so lieu tong hop dau trang
  cards: "/reports/cards",
  // Bang bao cao theo phong/ban
  departmentRows: "/reports/departments",
  // Du lieu phan bo (vd phan bo vai tro)
  distribution: "/reports/distribution",
} as const;