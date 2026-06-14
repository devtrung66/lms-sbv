import type {
  ReportCardData,
  DepartmentReportRow,
  DistributionSlice,
} from "../model/types";
import type {
  RawReportCard,
  RawDepartmentReportRow,
  RawDistributionSlice,
} from "../api/queries";

// Mapping the so lieu (gan giong nhau, giu cho nhat quan kien truc)
export function toReportCard(raw: RawReportCard): ReportCardData {
  return {
    label: raw.label,
    value: raw.value,
    unit: raw.unit,
    change: raw.change,
  };
}

// Mapping dong bao cao theo phong/ban
export function toDepartmentReportRow(raw: RawDepartmentReportRow): DepartmentReportRow {
  return {
    department: raw.department,
    totalStaff: raw.total_staff,
    completedCourses: raw.completed_courses,
    averageScore: raw.average_score,
    completionRate: raw.completion_rate,
  };
}

// Mapping mot phan phan bo
export function toDistributionSlice(raw: RawDistributionSlice): DistributionSlice {
  return {
    label: raw.label,
    value: raw.value,
    percent: raw.percent,
  };
}