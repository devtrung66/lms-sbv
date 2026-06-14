import {
  getAccessToken,
  setTokens,
  clearTokens,
} from "@/core/api/interceptors";
import type { AuthTokens } from "../model/types";

// Cau truc payload giai ma tu JWT (phan can dung o frontend)
interface JwtPayload {
  // Thoi diem het han, tinh bang giay (chuan JWT)
  exp: number;
  sub: string;
  role: string;
}

// Giai ma phan payload cua JWT ma khong can thu vien ngoai.
// Chi dung de doc han su dung, khong dung de xac thuc (viec do o backend).
function decodeJwt(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
}

// Tang dich vu quan ly token: doc, luu, xoa, kiem tra han.
export const tokenService = {
  // Luu cap token sau khi dang nhap
  save(tokens: AuthTokens): void {
    setTokens(tokens.accessToken, tokens.refreshToken);
  },

  // Xoa token khi dang xuat
  clear(): void {
    clearTokens();
  },

  // Kiem tra con token hay khong
  hasToken(): boolean {
    return getAccessToken() !== null;
  },

  // Kiem tra access token da het han chua (con han 30 giay coi nhu het)
  isExpired(): boolean {
    const token = getAccessToken();
    if (!token) return true;
    const payload = decodeJwt(token);
    if (!payload) return true;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    return payload.exp - nowInSeconds < 30;
  },
};