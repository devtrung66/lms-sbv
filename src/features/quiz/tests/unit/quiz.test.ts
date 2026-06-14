import { describe, it, expect } from "vitest";
import { gradingService } from "../../services/gradingService";
import { attemptService } from "../../services/attemptService";
import { formatCountdown, attemptProgress } from "../../lib/utils";
import type { QuizResult, Quiz } from "../../model/types";

// Kiem thu don vi cho logic cham diem va luat dat 80%.
describe("quiz - cham diem", () => {
  it("so sanh dap an dung khong phu thuoc thu tu", () => {
    expect(gradingService.isAnswerCorrect(["a", "b"], ["b", "a"])).toBe(true);
    expect(gradingService.isAnswerCorrect(["a"], ["a", "b"])).toBe(false);
  });

  it("tinh diem theo thang 100", () => {
    expect(gradingService.computeScore(8, 10)).toBe(80);
    expect(gradingService.computeScore(0, 0)).toBe(0);
  });

  it("luat dat: dung 80% la dat, 79% la khong dat", () => {
    expect(gradingService.isPassed(80, 80)).toBe(true);
    expect(gradingService.isPassed(79, 80)).toBe(false);
    expect(gradingService.isPassed(100, 80)).toBe(true);
  });
});

describe("quiz - lan lam", () => {
  const quiz = { id: "q1", maxAttempts: 3 } as Quiz;

  it("khong cho lam lai khi da dat", () => {
    const results = [{ passed: true, score: 90 }] as QuizResult[];
    expect(attemptService.canRetry(results, quiz)).toBe(false);
  });

  it("het luot thi khong cho lam lai", () => {
    const results = [
      { passed: false, score: 50 },
      { passed: false, score: 60 },
      { passed: false, score: 70 },
    ] as QuizResult[];
    expect(attemptService.canRetry(results, quiz)).toBe(false);
  });

  it("lay lan diem cao nhat", () => {
    const results = [
      { score: 50 },
      { score: 90 },
      { score: 70 },
    ] as QuizResult[];
    expect(attemptService.bestResult(results)?.score).toBe(90);
  });
});

describe("quiz - utils", () => {
  it("dinh dang dem nguoc", () => {
    expect(formatCountdown(125)).toBe("02:05");
    expect(formatCountdown(Infinity)).toBe("∞");
  });

  it("tinh tien do lam bai", () => {
    expect(attemptProgress(5, 10)).toBe(50);
  });
});