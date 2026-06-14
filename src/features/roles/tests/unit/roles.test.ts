import { describe, it, expect } from "vitest";
import { permissionService } from "../../services/permissionService";
import { canDeleteRole, countPermissions } from "../../lib/utils";
import { roleFormSchema } from "../../model/schemas";
import type { Role } from "../../model/types";

// Kiem thu don vi cho logic phan quyen.
describe("roles - quyen", () => {
  it("bat/tat mot quyen trong danh sach", () => {
    let ids = ["users.view"];
    ids = permissionService.togglePermission(ids, "users.create");
    expect(ids).toContain("users.create");
    ids = permissionService.togglePermission(ids, "users.view");
    expect(ids).not.toContain("users.view");
  });

  it("kiem tra vai tro co quyen", () => {
    const role = { permissionIds: ["courses.view"] } as Role;
    expect(permissionService.hasPermission(role, "courses.view")).toBe(true);
    expect(permissionService.hasPermission(role, "courses.create")).toBe(false);
  });
});

describe("roles - utils", () => {
  const base: Role = {
    id: "1",
    code: "custom",
    name: "Vai trò tùy chỉnh",
    permissionIds: ["a", "b"],
    userCount: 0,
    isSystem: false,
  };

  it("chi cho xoa vai tro khong phai he thong va khong co nguoi dung", () => {
    expect(canDeleteRole(base)).toBe(true);
    expect(canDeleteRole({ ...base, isSystem: true })).toBe(false);
    expect(canDeleteRole({ ...base, userCount: 3 })).toBe(false);
  });

  it("dem so quyen", () => {
    expect(countPermissions(base)).toBe(2);
  });
});

describe("roles - schema", () => {
  it("ma vai tro chi gom chu thuong va gach duoi", () => {
    expect(roleFormSchema.safeParse({ code: "dept_head", name: "X", permissionIds: [] }).success).toBe(true);
    expect(roleFormSchema.safeParse({ code: "Dept Head", name: "X", permissionIds: [] }).success).toBe(false);
  });
});