import { describe, it, expect, beforeEach } from "vitest";
import { useNotificationStore } from "../../state/store";

// Kiem thu tich hop luong dropdown chuong.
describe("notifications - dropdown chuong", () => {
  beforeEach(() => {
    useNotificationStore.getState().closeDropdown();
  });

  it("mac dinh dropdown dong", () => {
    expect(useNotificationStore.getState().dropdownOpen).toBe(false);
  });

  it("bat/tat dropdown", () => {
    useNotificationStore.getState().toggleDropdown();
    expect(useNotificationStore.getState().dropdownOpen).toBe(true);
    useNotificationStore.getState().toggleDropdown();
    expect(useNotificationStore.getState().dropdownOpen).toBe(false);
  });

  it("dong dropdown", () => {
    useNotificationStore.getState().toggleDropdown();
    useNotificationStore.getState().closeDropdown();
    expect(useNotificationStore.getState().dropdownOpen).toBe(false);
  });
});