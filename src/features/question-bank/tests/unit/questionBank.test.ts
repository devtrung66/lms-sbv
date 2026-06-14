import { describe, it, expect } from "vitest";
import { questionFormSchema } from "../../model/schemas";
import { enforceSingleCorrect, createEmptyForm } from "../../lib/utils";
import type { BankAnswerOption } from "../../model/types";

// Kiem thu don vi cho rang buoc dap an va quy tac dap an dung.
describe("question-bank - schema", () => {
  it("tu choi cau hoi khong co dap an dung", () => {
    const form = createEmptyForm();
    form.content = "Câu hỏi mẫu";
    form.topic = "Chủ đề A";
    // Khong danh dau dap an dung nao
    const result = questionFormSchema.safeParse(form);
    expect(result.success).toBe(false);
  });

  it("chap nhan cau hoi co it nhat mot dap an dung", () => {
    const form = createEmptyForm();
    form.content = "Câu hỏi mẫu";
    form.topic = "Chủ đề A";
    form.options[0]!.content = "Đáp án 1";
    form.options[0]!.isCorrect = true;
    form.options[1]!.content = "Đáp án 2";
    const result = questionFormSchema.safeParse(form);
    expect(result.success).toBe(true);
  });
});

describe("question-bank - quy tac dap an dung", () => {
  const options: BankAnswerOption[] = [
    { id: "a", content: "A", isCorrect: false },
    { id: "b", content: "B", isCorrect: false },
    { id: "c", content: "C", isCorrect: false },
  ];

  it("cau mot lua chon: chi mot dap an dung", () => {
    const after = enforceSingleCorrect(options, "single_choice", "b");
    expect(after.filter((o) => o.isCorrect)).toHaveLength(1);
    expect(after.find((o) => o.id === "b")?.isCorrect).toBe(true);
  });

  it("cau nhieu lua chon: cho phep nhieu dap an dung", () => {
    let after = enforceSingleCorrect(options, "multiple_choice", "a");
    after = enforceSingleCorrect(after, "multiple_choice", "b");
    expect(after.filter((o) => o.isCorrect)).toHaveLength(2);
  });
});