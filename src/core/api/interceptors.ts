// Cac ham can thiep vao vong doi request/response.
// Tach rieng khoi client.ts de de test va de thay doi co che xac thuc.

const ACCESS_TOKEN_KEY = "lms_access_token";
const REFRESH_TOKEN_KEY = "lms_refresh_token";

// Doc access token tu bo nho cuc bo
export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// Luu cap token sau khi dang nhap hoac lam moi
export function setTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

// Xoa token khi dang xuat hoac het phien
export function clearTokens(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

// Gan header Authorization neu da co token
export function applyAuthHeader(
  headers: Record<string, string>
): Record<string, string> {
  const token = getAccessToken();
  if (token) {
    return { ...headers, Authorization: `Bearer ${token}` };
  }
  return headers;
}

// Xu ly loi response truoc khi nem ra ngoai.
// Vd: 401 -> xoa token va chuyen ve trang dang nhap.
export async function handleResponseError(response: Response): Promise<void> {
  if (response.status === 401) {
    clearTokens();
    // Tranh vong lap chuyen huong neu dang o trang dang nhap
    if (!window.location.pathname.startsWith("/login")) {
      window.location.assign("/login");
    }
  }
}