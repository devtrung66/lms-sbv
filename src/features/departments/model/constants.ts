// Cac hang so rieng cua module departments.

// Vai tro duoc phep quan ly phong/ban
export const ALLOWED_ROLES = ["admin"] as const;

// Do dai toi da cua ma phong/ban
export const MAX_CODE_LENGTH = 10;

// Nguong ty le hoan thanh de to mau (cao/trung binh/thap)
export const COMPLETION_THRESHOLDS = {
  high: 80,
  medium: 50,
} as const;