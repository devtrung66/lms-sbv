// Cau hinh rieng cua module reports.
export const reportsConfig = {
  // Vai tro duoc phep xem bao cao
  allowedRoles: ["admin", "manager"] as const,

  // Co cho phep xuat bao cao hay khong
  enableExport: true,

  // So thang mac dinh khi mo bao cao
  defaultMonths: 6,
} as const;