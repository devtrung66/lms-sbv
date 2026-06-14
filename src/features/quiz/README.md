# Module: quiz

Bai kiem tra cuoi khoa: lam bai, cham diem, luat dat 80% moi qua.

## Chuc nang
- Lam bai kiem tra (cau 1 dap an / nhieu dap an / dung-sai).
- Dem nguoc thoi gian, tu dong nop khi het gio.
- Cham diem o backend (client khong co dap an dung).
- Luat dat: diem >= 80% (lay tu VITE_PASS_THRESHOLD).
- Lich su cac lan lam, gioi han so lan lam lai.

## Cau truc
- `model/` types, schema, hang so (nguong dat, thong diep ket qua).
- `api/` endpoints, queries (lay de KHONG kem dap an dung), mutations (nop bai).
- `adapters/` quizAdapter, resultAdapter.
- `services/` quizService, gradingService (logic nguong dat), attemptService (thoi gian, so lan).
- `state/` store (giu bai lam + thoi diem bat dau), selectors, actions.
- `hooks/` useQuiz, useQuizAttempt (dem gio + tu nop), useQuizResult.
- `ui/` OptionItem, QuestionCard, Timer, ScoreBadge, PassFailBanner /
  QuizRunner, ResultSummary, QuizReview / Take, Result.

## Luu y bao mat
- De bai gui xuong client KHONG kem dap an dung.
- Cham diem chinh thuc do backend thuc hien.
- Dong ho dem nguoc dua tren startedAt that, reload khong duoc them gio.
- gradingService phia client chi dung de hien thi/on tap, khong phai cham diem that.

## Public API
Import qua `@/features/quiz`: hooks, services, ScoreBadge, types.