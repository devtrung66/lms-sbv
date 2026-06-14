import { describe, it, expect } from "vitest";
import { getChangedFields, hasChanges } from "../../lib/utils";
import { settingsFormSchema } from "../../model/schemas";
import type { SystemSettings } from "../../model/types";

// Cau hinh goc mau de kiem thu
const base: SystemSettings = {
  systemName: "Hệ thống Đào tạo",
  organizationName: "Cục Quản lý, giám sát tổ chức tín dụng",
  supportEmail: "support@sbv.gov.vn",
  passThreshold: 80,
  defaultMaxAttempts: 3,
  enableGoogleLogin: true,
  enableEmailNotification: false,
  autoLockInactiveDays: 0,
};

describe("settings - phat hien thay doi", () => {
  it("khong thay doi khi gia tri giong nhau", () => {
    expect(hasChanges(base, { passThreshold: 80 })).toBe(false);
  });

  it("phat hien truong thay doi", () => {
    const changed = getChangedFields(base, { passThreshold: 85, systemName: "Hệ thống Đào tạo" });
    expect(changed.passThreshold).toBe(85);
    expect(changed.systemName).toBeUndefined();
  });
});

describe("settings - schema", () => {
  it("tu choi nguong dat ngoai khoang 50-100", () => {
    expect(settingsFormSchema.safeParse({ passThreshold: 40 }).success).toBe(false);
    expect(settingsFormSchema.safeParse({ passThreshold: 80 }).success).toBe(true);
  });

  it("tu choi email ho tro khong hop le", () => {
    expect(settingsFormSchema.safeParse({ supportEmail: "khong-phai-email" }).success).toBe(false);
  });
});