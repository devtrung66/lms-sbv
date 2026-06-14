// Cau hinh rieng cua module settings.
export const settingsConfig = {
  // Vai tro duoc phep thay doi cau hinh he thong
  allowedRoles: ["admin"] as const,

  // Co hien thi xac nhan truoc khi luu thay doi quan trong hay khong
  confirmCriticalChanges: true,
} as const;