import { describe, it, expect, beforeEach } from "vitest";
import { useQuizStore } from "../../state/store";
import { quizActions } from "../../state/actions";

// Kiem thu tich hop luong lam bai o cap trang thai.
describe("quiz - luong lam bai", () => {
  beforeEach(() => {
    useQuizStore.getState().reset();
  });

  it("bat dau lam bai ghi lai thoi diem bat dau", () => {
    quizActions.start("quiz1");
    const state = useQuizStore.getState();
    expect(state.activeQuizId).toBe("quiz1");
    expect(state.startedAt).not.toBeNull();
  });

  it("luu cau tra loi va dem so cau da tra loi", () => {
    quizActions.start("quiz1");
    quizActions.answer("c1", ["a"]);
    quizActions.answer("c2", ["b", "c"]);
    const answers = useQuizStore.getState().answers;
    expect(Object.keys(answers)).toHaveLength(2);
    expect(answers.c2?.selectedOptionIds).toEqual(["b", "c"]);
  });

  it("dieu huong giua cac cau hoi", () => {
    quizActions.start("quiz1");
    quizActions.goTo(3);
    expect(useQuizStore.getState().currentIndex).toBe(3);
    quizActions.previous();
    expect(useQuizStore.getState().currentIndex).toBe(2);
  });
});