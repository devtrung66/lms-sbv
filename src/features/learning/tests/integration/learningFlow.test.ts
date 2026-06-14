import { describe, it, expect, beforeEach } from "vitest";
import { useLearningStore } from "../../state/store";
import { learningActions } from "../../state/actions";

// Kiem thu tich hop luong tien do hoc o cap trang thai.
describe("learning - luong tien do", () => {
  beforeEach(() => {
    useLearningStore.getState().reset();
  });

  it("cap nhat vi tri xem se danh dau bai can dong bo", () => {
    learningActions.updatePosition("lesson1", 42.7);
    const state = useLearningStore.getState();
    expect(state.progress.lesson1?.lastPositionSeconds).toBe(42);
    expect(state.dirtyLessonIds.has("lesson1")).toBe(true);
  });

  it("danh dau hoan thanh", () => {
    learningActions.markComplete("lesson1");
    expect(useLearningStore.getState().progress.lesson1?.completed).toBe(true);
  });

  it("danh dau da dong bo se bo khoi danh sach dirty", () => {
    learningActions.updatePosition("lesson1", 10);
    useLearningStore.getState().markSynced("lesson1");
    expect(useLearningStore.getState().dirtyLessonIds.has("lesson1")).toBe(false);
  });
});