import { apiClient } from "@/core/api/client";
import { AUTH_ENDPOINTS } from "./endpoints";
import type {
  LoginCredentials,
  GoogleAuthPayload,
  AuthTokens,
} from "../model/types";

// Cau truc tho tra ve tu backend khi dang nhap (chua qua adapter)
export interface RawAuthResponse {
  access_token: string;
  refresh_token: string;
}

// Goi API dang nhap bang email + mat khau
export function loginRequest(
  credentials: LoginCredentials
): Promise<RawAuthResponse> {
  return apiClient.post<RawAuthResponse>(AUTH_ENDPOINTS.login, credentials);
}

// Goi API dang nhap bang Google Workspace
export function loginGoogleRequest(
  payload: GoogleAuthPayload
): Promise<RawAuthResponse> {
  return apiClient.post<RawAuthResponse>(AUTH_ENDPOINTS.loginGoogle, payload);
}

// Goi API lam moi access token tu refresh token
export function refreshTokenRequest(refreshToken: string): Promise<RawAuthResponse> {
  return apiClient.post<RawAuthResponse>(AUTH_ENDPOINTS.refresh, {
    refresh_token: refreshToken,
  });
}

// Goi API dang xuat (vo hieu hoa refresh token o backend)
export function logoutRequest(tokens: AuthTokens): Promise<void> {
  return apiClient.post<void>(AUTH_ENDPOINTS.logout, {
    refresh_token: tokens.refreshToken,
  });
}