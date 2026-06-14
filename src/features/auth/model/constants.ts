// Cac hang so rieng cua module auth.

// Do dai mat khau toi thieu theo quy dinh bao mat noi bo
export const MIN_PASSWORD_LENGTH = 8;

// Ten mien email cong vu hop le
export const ALLOWED_EMAIL_DOMAIN = "sbv.gov.vn";

// Thong diep loi hien thi tren giao dien (tieng Viet co dau)
export const AUTH_MESSAGES = {
  invalidEmail: "Email công vụ không hợp lệ",
  wrongDomain: `Email phải thuộc tên miền @${ALLOWED_EMAIL_DOMAIN}`,
  passwordTooShort: `Mật khẩu phải có ít nhất ${MIN_PASSWORD_LENGTH} ký tự`,
  required: "Vui lòng nhập đầy đủ thông tin",
  loginFailed: "Email hoặc mật khẩu không đúng",
  sessionExpired: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại",
} as const;