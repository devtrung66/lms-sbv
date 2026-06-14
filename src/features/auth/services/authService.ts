import { tokenService } from "./tokenService";
import { sessionService } from "./sessionService";
import type { LoginCredentials, GoogleAuthPayload, AuthUser } from "../model/types";

// Tai khoan mock de demo giao dien khi chua co backend.
const MOCK_EMAIL = "test@gmail.com";
const MOCK_PASSWORD = "123456789";

const MOCK_USER: AuthUser = {
  id: "mock-1",
  fullName: "Nguyen Van A",
  email: MOCK_EMAIL,
  role: "admin",
  staffCode: "CB001",
  department: "Thanh tra 1",
  position: "Chuyen vien chinh",
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthUser> {
    // Che do mock: kiem tra tai khoan test, khong goi backend
    if (credentials.email === MOCK_EMAIL && credentials.password === MOCK_PASSWORD) {
      tokenService.save({ accessToken: "mock-token", refreshToken: "mock-refresh" });
      sessionService.setMockUser(MOCK_USER);
      return MOCK_USER;
    }
    throw new Error("Sai tai khoan hoac mat khau");
  },

  async loginWithGoogle(_payload: GoogleAuthPayload): Promise<AuthUser> {
    tokenService.save({ accessToken: "mock-token", refreshToken: "mock-refresh" });
    sessionService.setMockUser(MOCK_USER);
    return MOCK_USER;
  },

  async logout(): Promise<void> {
    tokenService.clear();
    sessionService.clear();
  },
};