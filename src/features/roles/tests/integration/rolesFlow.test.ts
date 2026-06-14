import { describe, it, expect, beforeEach } from "vitest";
import { useRoleStore } from "../../state/store";
import { roleActions } from "../../state/actions";

// Kiem thu tich hop luong ban nhap quyen o cap trang thai.
describe("roles - luong ban nhap quyen", () => {
  beforeEach(() => {
    useRoleStore.setState({ selectedRoleId: null, draftPermissions: {} });
  });

  it("khoi tao ban nhap tu quyen goc", () => {
    roleActions.initDraft("role1", ["users.view"]);
    expect(useRoleStore.getState().draftPermissions.role1).toEqual(["users.view"]);
  });

  it("bat/tat quyen trong ban nhap", () => {
    roleActions.initDraft("role1", ["users.view"]);
    roleActions.togglePermission("role1", "users.create");
    expect(useRoleStore.getState().draftPermissions.role1).toContain("users.create");
  });

  it("xoa ban nhap sau khi luu", () => {
    roleActions.initDraft("role1", ["a"]);
    roleActions.clearDraft("role1");
    expect(useRoleStore.getState().draftPermissions.role1).toBeUndefined();
  });
});