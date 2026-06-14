import { describe, it, expect } from "vitest";
import { departmentFormSchema } from "../../model/schemas";
import { completionColorClass, activeRatio } from "../../lib/utils";

// Kiem thu don vi cho schema va tien ich cua module departments.
describe("departments - schema", () => {
  it("chap nhan phong/ban hop le", () => {
    const result = departmentFormSchema.safeParse({
      name: "Thanh tra 1",
      code: "TT1",
      managerName: "Nguyễn Văn A",
    });
    expect(result.success).toBe(true);
  });

  it("tu choi khi thieu ten", () => {
    const result = departmentFormSchema.safeParse({ name: "", code: "TT1" });
    expect(result.success).toBe(false);
  });
});

describe("departments - utils", () => {
  it("to mau ty le hoan thanh theo nguong", () => {
    expect(completionColorClass(85)).toBe("text-green-600");
    expect(completionColorClass(60)).toBe("text-amber-600");
    expect(completionColorClass(30)).toBe("text-red-600");
  });

  it("tinh ty le cong chuc hoat dong", () => {
    expect(activeRatio(44, 45)).toBe(98);
    expect(activeRatio(0, 0)).toBe(0);
  });
});