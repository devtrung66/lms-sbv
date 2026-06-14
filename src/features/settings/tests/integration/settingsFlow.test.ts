import { describe, it, expect, beforeEach } from "vitest";
import { useSettingsStore } from "../../state/store";

// Kiem thu tich hop luong chuyen nhom cau hinh.
describe("settings - chuyen nhom cau hinh", () => {
  beforeEach(() => {
    useSettingsStore.getState().setActiveSection("general");
  });

  it("mac dinh la nhom thong tin chung", () => {
    expect(useSettingsStore.getState().activeSection).toBe("general");
  });

  it("chuyen sang nhom bai kiem tra", () => {
    useSettingsStore.getState().setActiveSection("quiz");
    expect(useSettingsStore.getState().activeSection).toBe("quiz");
  });
});