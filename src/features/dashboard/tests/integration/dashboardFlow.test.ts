import { describe, it, expect, beforeEach } from "vitest";
import { useDashboardStore } from "../../state/store";

// Kiem thu tich hop luong chuyen che do xem dashboard.
describe("dashboard - che do xem", () => {
  beforeEach(() => {
    useDashboardStore.getState().setView("learner");
  });

  it("mac dinh la che do hoc vien", () => {
    expect(useDashboardStore.getState().view).toBe("learner");
  });

  it("chuyen sang che do quan tri", () => {
    useDashboardStore.getState().setView("admin");
    expect(useDashboardStore.getState().view).toBe("admin");
  });
});