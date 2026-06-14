import { describe, it, expect, beforeEach } from "vitest";
import { useUserStore } from "../../state/store";
import { userActions } from "../../state/actions";

// Kiem thu tich hop luong loc/chon o cap trang thai (khong goi mang).
describe("users - luong bo loc", () => {
  beforeEach(() => {
    useUserStore.getState().resetFilters();
    useUserStore.getState().setSelectedUser(null);
  });

  it("doi tu khoa tim kiem se dua ve trang 1", () => {
    useUserStore.getState().setFilters({ page: 5 });
    userActions.search("nguyen");
    const filters = useUserStore.getState().filters;
    expect(filters.search).toBe("nguyen");
    expect(filters.page).toBe(1);
  });

  it("chon va bo chon cong chuc", () => {
    userActions.selectUser("CB001");
    expect(useUserStore.getState().selectedUserId).toBe("CB001");
    userActions.selectUser(null);
    expect(useUserStore.getState().selectedUserId).toBeNull();
  });

  it("xoa bo loc dua ve mac dinh", () => {
    userActions.filterByStatus("locked");
    userActions.clearFilters();
    expect(useUserStore.getState().filters.status).toBeUndefined();
  });
});