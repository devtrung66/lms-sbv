import { ALLOWED_EMAIL_DOMAIN } from "../model/constants";

// Cac tien ich nho rieng cho module auth.

// Kiem tra nhanh email co thuoc ten mien cong vu hay khong
export function isWorkEmail(email: string): boolean {
  return email.trim().toLowerCase().endsWith(`@${ALLOWED_EMAIL_DOMAIN}`);
}

// Che bot email khi hien thi log/giao dien: "nguyenvana@sbv.gov.vn" -> "ngu***@sbv.gov.vn"
export function maskEmail(email: string): string {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  const visible = name.slice(0, 3);
  return `${visible}***@${domain}`;
}