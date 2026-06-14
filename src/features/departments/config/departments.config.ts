// Cau hinh rieng cua module departments.
export const departmentsConfig = {
  // Vai tro duoc phep quan ly phong/ban
  allowedRoles: ["admin"] as const,

  // Co hien thi cot ty le hoan thanh trong bang hay khong
  showCompletionColumn: true,
} as const;