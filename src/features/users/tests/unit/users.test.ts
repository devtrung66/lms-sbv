import { describe, it, expect } from "vitest";
import { validateUserForm } from "../../lib/validators";
import { toRatio, sortByStaffCode } from "../../lib/utils";
import type { StaffUser } from "../../model/types";

// Kiem thu don vi cho validator va tien ich cua module users.
describe("users - validators", () => {
  it("chap nhan form hop le", () => {
    const result = validateUserForm({
      staffCode: "CB001",
      fullName: "Nguyễn Văn A",
      email: "nguyenvana@sbv.gov.vn",
      phone: "0901234567",
      department: "Thanh tra 1",
      position: "Chuyên viên chính",
      role: "admin",
    });
    expect(result.valid).toBe(true);
  });

  it("tu choi khi thieu ho ten", () => {
    const result = validateUserForm({
      staffCode: "CB001",
      fullName: "",
      email: "nguyenvana@sbv.gov.vn",
      department: "Thanh tra 1",
      position: "Chuyên viên",
      role: "learner",
    });
    expect(result.valid).toBe(false);
  });
});

describe("users - utils", () => {
  it("tinh ti le an toan khi tong bang 0", () => {
    expect(toRatio(5, 0)).toBe(0);
    expect(toRatio(1, 4)).toBe(0.25);
  });

  it("sap xep theo ma cong chuc", () => {
    const list = [
      { staffCode: "CB003" },
      { staffCode: "CB001" },
      { staffCode: "CB002" },
    ] as StaffUser[];
    const sorted = sortByStaffCode(list);
    expect(sorted.map((u) => u.staffCode)).toEqual(["CB001", "CB002", "CB003"]);
  });
});