import { describe, it, expect } from "vitest";
import { completionRatio, toChartSegments, formatStudyTime } from "../../lib/utils";
import type { ProgressSummary } from "../../model/types";

// Kiem thu don vi cho tien ich cua module progress.
const sample: ProgressSummary = {
  totalCourses: 24,
  completedCourses: 12,
  inProgressCourses: 8,
  notStartedCourses: 4,
  overdueCourses: 0,
  averageProgress: 68,
  totalStudyTimeSeconds: 117900,
};

describe("progress - utils", () => {
  it("tinh ty le hoan thanh", () => {
    expect(completionRatio(sample)).toBe(0.5);
    expect(completionRatio({ ...sample, totalCourses: 0 })).toBe(0);
  });

  it("chia tong quan thanh 4 phan bieu do", () => {
    const segments = toChartSegments(sample);
    expect(segments).toHaveLength(4);
    expect(segments[0]?.value).toBe(12);
  });

  it("dinh dang tong thoi gian hoc", () => {
    expect(formatStudyTime(117900)).toBe("32h 45m");
  });
});