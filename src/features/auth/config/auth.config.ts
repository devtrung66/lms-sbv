import { env } from "@/core/config/env";

// Cau hinh rieng cua module auth, gom gia tri lay tu env va tham so co dinh.
export const authConfig = {
  // Client ID dung cho luong dang nhap Google Workspace
  googleClientId: env.googleClientId,

  // Pham vi quyen yeu cau tu Google
  googleScopes: ["openid", "email", "profile"],

  // Co cho phep dang nhap bang Google hay khong (tat neu thieu client ID)
  enableGoogleLogin: env.googleClientId.length > 0,

  // So lan dang nhap sai toi da truoc khi canh bao (hien thi phia giao dien)
  maxLoginAttempts: 5,
} as const;