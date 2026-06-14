# Module: question-bank

Ngan hang cau hoi cho bai kiem tra (khu vuc quan tri).

## Chuc nang
- CRUD cau hoi (1 dap an / nhieu dap an / dung-sai).
- Soan dap an, danh dau dap an dung (rang buoc: >= 1 dap an dung).
- Phan loai theo chu de va do kho.
- Loc theo chu de, do kho, tu khoa.

## Cau truc
- `model/` types (BankQuestion co isCorrect - phia admin), schema (rang buoc dap an), hang so.
- `api/` endpoints, queries, mutations.
- `adapters/` questionAdapter.
- `services/` questionService.
- `state/` store (filter + trang thai form), selectors, actions.
- `hooks/` useQuestionList, useQuestionMutation.
- `lib/` createEmptyForm, enforceSingleCorrect (quy tac dap an dung theo loai).
- `ui/` QuestionTypeTag, QuestionRow, AnswerEditor / QuestionFilters, QuestionTable,
  QuestionFormModal / List, Form.

## Luu y
- Khac voi quiz (phia hoc vien): cau hoi o day KEM dap an dung (isCorrect)
  vi admin can soan va kiem tra. Dap an dung KHONG bao gio gui xuong hoc vien.
- Cau 1 dap an / dung-sai: chi mot dap an dung (enforceSingleCorrect).

## Public API
Import qua `@/features/question-bank`: hooks, questionService, types.