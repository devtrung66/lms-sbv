import { DEFAULT_PASS_THRESHOLD } from "../model/constants";

// Cau hinh rieng cua module quiz.
export const quizConfig = {
  // Nguong diem dat de qua bai (phan tram) - mac dinh 80%
  passThreshold: DEFAULT_PASS_THRESHOLD,

  // Canh bao khi con lai bao nhieu giay (doi mau dong ho dem nguoc)
  warningSeconds: 60,

  // Co xao tron thu tu cau hoi moi lan lam hay khong
  shuffleQuestions: true,

  // Co cho phep xem lai dap an dung sau khi nop hay khong
  showAnswersAfterSubmit: true,
} as const;