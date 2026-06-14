import type { UserRole } from "@/app/router/guards";

// Thong tin nguoi dung dang dang nhap (lay tu token + API ho so)
export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  // Ma cong chuc, vd "CB001"
  staffCode: string;
  // Phong/ban dang cong tac
  department: string;
  // Chuc vu, vd "Chuyên viên chính"
  position: string;
  avatarUrl?: string;
}

// Cap token nhan ve sau khi dang nhap thanh cong
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

// Phien lam viec hien tai
export interface Session {
  user: AuthUser;
  tokens: AuthTokens;
}

// Du lieu form dang nhap bang email + mat khau
export interface LoginCredentials {
  email: string;
  password: string;
}

// Du lieu gui len khi dang nhap bang Google Workspace
export interface GoogleAuthPayload {
  // Ma uy quyen nhan tu Google
  idToken: string;
}