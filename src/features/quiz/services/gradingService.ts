import { DEFAULT_PASS_THRESHOLD } from "../model/constants";
import type { Question, UserAnswer } from "../model/types";

// Tang dich vu cham diem phia client.
// LUU Y: day chi de hien thi tam (vd cham nhanh trong che do on tap).
// Cham diem chinh thuc do backend thuc hien vi client khong co dap an dung.
// Tuy nhien logic nguong dat (>= 80%) duoc dat tap trung tai day de
// dong nhat giua hien thi va kiem tra.
export const gradingService = {
  // Kiem tra mot cau tra loi co dung khong (so sanh tap dap an chon va dap an dung)
  isAnswerCorrect(userOptionIds: string[], correctOptionIds: string[]): boolean {
    if (userOptionIds.length !== correctOptionIds.length) return false;
    const sortedUser = [...userOptionIds].sort();
    const sortedCorrect = [...correctOptionIds].sort();
    return sortedUser.every((id, index) => id === sortedCorrect[index]);
  },

  // Tinh diem theo thang 100 tu so diem dat duoc va tong diem
  computeScore(earnedPoints: number, totalPoints: number): number {
    if (totalPoints === 0) return 0;
    return Math.round((earnedPoints / totalPoints) * 100);
  },

  // Kiem tra diem co dat nguong qua bai khong (mac dinh 80%)
  isPassed(score: number, threshold: number = DEFAULT_PASS_THRESHOLD): boolean {
    return score >= threshold;
  },

  // Dem so cau da tra loi trong bai (de canh bao neu con cau bo trong)
  countAnswered(answers: UserAnswer[]): number {
    return answers.filter((a) => a.selectedOptionIds.length > 0).length;
  },

  // Kiem tra da tra loi het tat ca cau hoi chua
  isComplete(answers: UserAnswer[], questions: Question[]): boolean {
    const answeredIds = new Set(
      answers.filter((a) => a.selectedOptionIds.length > 0).map((a) => a.questionId)
    );
    return questions.every((q) => answeredIds.has(q.id));
  },
};