// Loai cau hoi trong bai kiem tra
export type QuestionType = "single_choice" | "multiple_choice" | "true_false";

// Mot lua chon dap an
export interface AnswerOption {
  id: string;
  // Noi dung dap an
  content: string;
}

// Mot cau hoi trong bai kiem tra (phia hoc vien - khong kem dap an dung)
export interface Question {
  id: string;
  content: string;
  type: QuestionType;
  options: AnswerOption[];
  // Diem cua cau hoi (mac dinh 1)
  points: number;
}

// Bai kiem tra (phia hoc vien lam bai)
export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  questions: Question[];
  // Thoi gian lam bai toi da (phut), 0 = khong gioi han
  durationMinutes: number;
  // Nguong diem dat de qua bai (phan tram)
  passThreshold: number;
  // So lan duoc phep lam lai
  maxAttempts: number;
}

// Cau tra loi cua hoc vien cho mot cau hoi
export interface UserAnswer {
  questionId: string;
  // Cac id dap an duoc chon (nhieu neu la cau hoi nhieu lua chon)
  selectedOptionIds: string[];
}

// Lan lam bai cua hoc vien
export interface QuizAttempt {
  quizId: string;
  answers: UserAnswer[];
  // Thoi diem bat dau lam (ISO string)
  startedAt: string;
}

// Ket qua sau khi nop bai
export interface QuizResult {
  attemptId: string;
  quizId: string;
  // Diem dat duoc (thang 100)
  score: number;
  // So cau dung / tong so cau
  correctCount: number;
  totalQuestions: number;
  // Da dat nguong qua bai chua
  passed: boolean;
  // Nguong dat (phan tram) tai thoi diem lam
  passThreshold: number;
  // Lan lam thu may
  attemptNumber: number;
  submittedAt: string;
}