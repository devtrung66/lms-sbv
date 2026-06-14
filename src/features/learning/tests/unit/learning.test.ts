import { describe, it, expect } from "vitest";
import { playbackService } from "../../services/playbackService";
import {
  computeProgressPercent,
  canTakeFinalQuiz,
} from "../../lib/utils";
import type { EnrolledCourse } from "../../model/types";

// Kiem thu don vi cho logic playback va tien ich cua module learning.
describe("learning - playback", () => {
  it("video xem >= 90% coi nhu hoan thanh", () => {
    expect(playbackService.isVideoCompleted(90, 100)).toBe(true);
    expect(playbackService.isVideoCompleted(50, 100)).toBe(false);
  });

  it("tinh phan tram da xem", () => {
    expect(playbackService.watchedPercent(25, 100)).toBe(25);
    expect(playbackService.watchedPercent(0, 0)).toBe(0);
  });
});

describe("learning - utils", () => {
  it("tinh phan tram hoan thanh khoa hoc", () => {
    expect(computeProgressPercent(3, 4)).toBe(75);
    expect(computeProgressPercent(0, 0)).toBe(0);
  });

  it("chi cho lam bai kiem tra khi hoc xong het bai", () => {
    const base: EnrolledCourse = {
      id: "1",
      courseId: "c1",
      title: "Khóa A",
      status: "in_progress",
      progressPercent: 100,
      completedLessons: 10,
      totalLessons: 10,
      hasFinalQuiz: true,
    };
    expect(canTakeFinalQuiz(base)).toBe(true);
    expect(canTakeFinalQuiz({ ...base, completedLessons: 5 })).toBe(false);
    expect(canTakeFinalQuiz({ ...base, hasFinalQuiz: false })).toBe(false);
  });
});