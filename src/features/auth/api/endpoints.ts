// Tap trung dinh nghia duong dan API cua module auth.
// Khop voi identity-service (RS256 JWT) o backend.
export const AUTH_ENDPOINTS = {
  login: "/auth/login",
  loginGoogle: "/auth/google",
  logout: "/auth/logout",
  refresh: "/auth/refresh",
  // Lay thong tin nguoi dung hien tai tu access token
  me: "/auth/me",
} as const;