// Cac hang so dung chung toan he thong.
// Gia tri co the doc tu env duoc dat o tang config, day chi giu hang co dinh.

// Ten ung dung hien thi tren giao dien
export const APP_NAME = "Hệ thống Đào tạo trực tuyến nội bộ";
export const ORG_NAME = "Cục Quản lý, giám sát tổ chức tín dụng";

// Cac kich thuoc trang mac dinh cho bang du lieu
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100] as const;
export const DEFAULT_PAGE_SIZE = 10;

// Khoa luu tru cuc bo
export const STORAGE_KEYS = {
  accessToken: "lms_access_token",
  refreshToken: "lms_refresh_token",
  theme: "lms_theme",
} as const;

// Dinh dang ngay gio mac dinh (tieng Viet)
export const DATE_FORMAT = "dd/MM/yyyy";
export const DATETIME_FORMAT = "dd/MM/yyyy HH:mm";