import { describe, it, expect } from "vitest";
import { greetingByHour, limitCourses, limitNotices } from "../../lib/utils";
import { MAX_RECENT_COURSES, MAX_NOTICES } from "../../model/constants";
import type { DashboardCourse, DashboardNotice } from "../../model/types";

// Kiem thu don vi cho tien ich cua module dashboard.
describe("dashboard - loi chao", () => {
  it("chao buoi sang truoc 11h", () => {
    const morning = new Date();
    morning.setHours(8);
    expect(greetingByHour(morning)).toBe("Chào buổi sáng");
  });

  it("chao buoi toi sau 18h", () => {
    const evening = new Date();
    evening.setHours(20);
    expect(greetingByHour(evening)).toBe("Chào buổi tối");
  });
});

describe("dashboard - gioi han hien thi", () => {
  it("gioi han so khoa hoc gan day", () => {
    const courses = Array.from({ length: 10 }, (_, i) => ({
      courseId: String(i),
    })) as DashboardCourse[];
    expect(limitCourses(courses)).toHaveLength(MAX_RECENT_COURSES);
  });

  it("gioi han so thong bao", () => {
    const notices = Array.from({ length: 10 }, (_, i) => ({
      id: String(i),
    })) as DashboardNotice[];
    expect(limitNotices(notices)).toHaveLength(MAX_NOTICES);
  });
});