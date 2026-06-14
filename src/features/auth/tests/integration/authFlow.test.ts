import { describe, it, expect, beforeEach, vi } from "vitest";
import { useAuthStore } from "../../state/store";

// Kiem thu tich hop luong xac thuc o cap trang thai (khong goi mang that).
// Cac test goi mang se duoc bo sung khi co lop mock API dung chung.
describe("auth - luong trang thai", () => {
  beforeEach(() => {
    useAuthStore.getState().reset();
    useAuthStore.getState().setInitializing(false);
  });

  it("trang thai ban dau chua co nguoi dung", () => {
    expect(useAuthStore.getState().user).toBeNull();
  });

  it("dat nguoi dung thi coi nhu da dang nhap", () => {
    useAuthStore.getState().setUser({
      id: "1",
      fullName: "Nguyễn Văn A",
      email: "nguyenvana@sbv.gov.vn",
      role: "admin",
      staffCode: "CB001",
      department: "Thanh tra 1",
      position: "Chuyên viên chính",
    });
    expect(useAuthStore.getState().user?.role).toBe("admin");
  });

  it("reset xoa nguoi dung va loi", () => {
    useAuthStore.getState().setError("loi nao do");
    useAuthStore.getState().reset();
    expect(useAuthStore.getState().error).toBeNull();
    expect(useAuthStore.getState().user).toBeNull();
  });
});