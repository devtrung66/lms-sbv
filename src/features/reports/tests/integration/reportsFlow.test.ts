import { describe, it, expect, beforeEach } from "vitest";
import { useReportStore } from "../../state/store";

// Kiem thu tich hop luong loc bao cao o cap trang thai.
describe("reports - luong bo loc", () => {
  beforeEach(() => {
    useReportStore.getState().setFilters({ type: "course_completion", months: 6 });
  });

  it("doi loai bao cao", () => {
    useReportStore.getState().setFilters({ type: "quiz_results" });
    expect(useReportStore.getState().filters.type).toBe("quiz_results");
  });

  it("doi khoang thoi gian", () => {
    useReportStore.getState().setFilters({ months: 12 });
    expect(useReportStore.getState().filters.months).toBe(12);
  });

  it("loc theo phong/ban", () => {
    useReportStore.getState().setFilters({ department: "Thanh tra 1" });
    expect(useReportStore.getState().filters.department).toBe("Thanh tra 1");
  });
});