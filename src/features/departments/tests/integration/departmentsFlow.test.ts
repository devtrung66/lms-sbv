import { describe, it, expect, beforeEach } from "vitest";
import { useDepartmentStore } from "../../state/store";

// Kiem thu tich hop luong form phong/ban o cap trang thai.
describe("departments - luong form", () => {
  beforeEach(() => {
    useDepartmentStore.getState().closeForm();
  });

  it("mo form tao moi", () => {
    useDepartmentStore.getState().openCreate();
    const state = useDepartmentStore.getState();
    expect(state.formOpen).toBe(true);
    expect(state.editingId).toBeNull();
  });

  it("mo form sua giu lai id", () => {
    useDepartmentStore.getState().openEdit("dep1");
    expect(useDepartmentStore.getState().editingId).toBe("dep1");
  });

  it("dong form reset trang thai", () => {
    useDepartmentStore.getState().openEdit("dep1");
    useDepartmentStore.getState().closeForm();
    const state = useDepartmentStore.getState();
    expect(state.formOpen).toBe(false);
    expect(state.editingId).toBeNull();
  });
});