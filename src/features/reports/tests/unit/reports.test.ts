import { describe, it, expect } from "vitest";
import { formatChange, changeColorClass, totalDistribution } from "../../lib/utils";
import { exportService } from "../../services/exportService";
import type { DepartmentReportRow, DistributionSlice } from "../../model/types";

// Kiem thu don vi cho tien ich va xuat CSV cua module reports.
describe("reports - utils", () => {
  it("dinh dang phan tram thay doi", () => {
    expect(formatChange(12)).toBe("+12%");
    expect(formatChange(-5)).toBe("-5%");
    expect(formatChange(undefined)).toBeNull();
  });

  it("to mau theo chieu thay doi", () => {
    expect(changeColorClass(10)).toBe("text-green-600");
    expect(changeColorClass(-3)).toBe("text-red-600");
  });

  it("tinh tong phan bo", () => {
    const slices = [
      { label: "A", value: 10, percent: 50 },
      { label: "B", value: 10, percent: 50 },
    ] as DistributionSlice[];
    expect(totalDistribution(slices)).toBe(20);
  });
});

describe("reports - xuat CSV", () => {
  it("tao noi dung CSV co dong tieu de va du lieu", () => {
    const rows: DepartmentReportRow[] = [
      {
        department: "Thanh tra 1",
        totalStaff: 45,
        completedCourses: 40,
        averageScore: 88,
        completionRate: 88,
      },
    ];
    const csv = exportService.toCsv(rows);
    expect(csv).toContain("Phòng/Ban");
    expect(csv).toContain("Thanh tra 1");
    expect(csv).toContain("45");
  });
});