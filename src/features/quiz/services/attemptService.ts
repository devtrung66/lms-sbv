import type { Quiz, QuizResult } from "../model/types";

// Tang dich vu quan ly mot lan lam bai: thoi gian, so lan da lam.
export const attemptService = {
  // Tinh so giay con lai dua tren thoi diem bat dau va thoi gian cho phep
  remainingSeconds(startedAt: string, durationMinutes: number): number {
    if (durationMinutes <= 0) return Infinity; // khong gioi han thoi gian
    const elapsedMs = Date.now() - new Date(startedAt).getTime();
    const totalMs = durationMinutes * 60 * 1000;
    return Math.max(0, Math.floor((totalMs - elapsedMs) / 1000));
  },

  // Kiem tra con duoc lam lai khong (dua tren so lan da lam va gioi han)
  canRetry(results: QuizResult[], quiz: Quiz): boolean {
    // Neu da co lan dat thi khong can lam lai
    if (results.some((r) => r.passed)) return false;
    // Con luot neu so lan da lam chua dat toi da
    return results.length < quiz.maxAttempts;
  },

  // Lay lan lam dat diem cao nhat (de hien thi ket qua tot nhat)
  bestResult(results: QuizResult[]): QuizResult | null {
    if (results.length === 0) return null;
    return results.reduce((best, current) =>
      current.score > best.score ? current : best
    );
  },
};