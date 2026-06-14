import { describe, it, expect } from "vitest";
import { loginSchema } from "../../model/schemas";
import { validateLoginForm } from "../../lib/validators";
import { isWorkEmail, maskEmail } from "../../lib/utils";

// Kiem thu don vi cho phan kiem tra hop le va tien ich cua module auth.
describe("auth - validators", () => {
  it("chap nhan email cong vu hop le va mat khau du dai", () => {
    const result = validateLoginForm({
      email: "nguyenvana@sbv.gov.vn",
      password: "matkhau123",
    });
    expect(result.valid).toBe(true);
  });

  it("tu choi email sai ten mien", () => {
    const result = loginSchema.safeParse({
      email: "nguyenvana@gmail.com",
      password: "matkhau123",
    });
    expect(result.success).toBe(false);
  });

  it("tu choi mat khau qua ngan", () => {
    const result = validateLoginForm({
      email: "nguyenvana@sbv.gov.vn",
      password: "123",
    });
    expect(result.valid).toBe(false);
  });
});

describe("auth - utils", () => {
  it("nhan dien dung email cong vu", () => {
    expect(isWorkEmail("a@sbv.gov.vn")).toBe(true);
    expect(isWorkEmail("a@gmail.com")).toBe(false);
  });

  it("che bot ten email khi hien thi", () => {
    expect(maskEmail("nguyenvana@sbv.gov.vn")).toBe("ngu***@sbv.gov.vn");
  });
});