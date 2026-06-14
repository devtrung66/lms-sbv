import type { UserRole } from "@/app/router/guards";
import type { AuthUser, AuthTokens } from "../model/types";
import type { RawUserProfile } from "../api/queries";
import type { RawAuthResponse } from "../api/mutations";

// Chuyen vai tro dang chuoi tu backend sang kieu UserRole co kiem soat.
// Mac dinh ve "learner" neu gap gia tri la.
function mapRole(raw: string): UserRole {
  const normalized = raw.toLowerCase();
  if (normalized === "admin") return "admin";
  if (normalized === "instructor" || normalized === "giang_vien") return "instructor";
  if (normalized === "manager" || normalized === "truong_phong") return "manager";
  return "learner";
}

// Mapping API (snake_case) -> model noi bo (camelCase).
// Tap trung tai day de UI khong phu thuoc cau truc backend.
export function toAuthUser(raw: RawUserProfile): AuthUser {
  return {
    id: raw.id,
    fullName: raw.full_name,
    email: raw.email,
    role: mapRole(raw.role),
    staffCode: raw.staff_code,
    department: raw.department,
    position: raw.position,
    avatarUrl: raw.avatar_url,
  };
}

// Mapping cap token tu backend -> model noi bo
export function toAuthTokens(raw: RawAuthResponse): AuthTokens {
  return {
    accessToken: raw.access_token,
    refreshToken: raw.refresh_token,
  };
}