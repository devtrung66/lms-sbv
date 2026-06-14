import { describe, it, expect, beforeEach } from "vitest";
import { useQuestionBankStore } from "../../state/store";
import { questionBankActions } from "../../state/actions";

// Kiem thu tich hop luong loc va form o cap trang thai.
describe("question-bank - luong form", () => {
  beforeEach(() => {
    useQuestionBankStore.getState().closeForm();
  });

  it("mo form tao moi: editingId rong, form mo", () => {
    questionBankActions.create();
    const state = useQuestionBankStore.getState();
    expect(state.formOpen).toBe(true);
    expect(state.editingId).toBeNull();
  });

  it("mo form sua: editingId co gia tri", () => {
    questionBankActions.edit("q123");
    const state = useQuestionBankStore.getState();
    expect(state.formOpen).toBe(true);
    expect(state.editingId).toBe("q123");
  });

  it("dong form: reset trang thai", () => {
    questionBankActions.edit("q123");
    questionBankActions.closeForm();
    const state = useQuestionBankStore.getState();
    expect(state.formOpen).toBe(false);
    expect(state.editingId).toBeNull();
  });
});