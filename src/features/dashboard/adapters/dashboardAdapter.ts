import type {
  KpiCard,
  DashboardCourse,
  DashboardNotice,
  LearnerDashboard,
  AdminDashboard,
} from "../model/types";
import type { DistributionSlice } from "@/features/reports";
import type { ProgressTrendPoint } from "@/features/progress";
import type {
  RawKpiCard,
  RawDashboardCourse,
  RawDashboardNotice,
  RawSlice,
  RawTrendPoint,
  RawLearnerDashboard,
  RawAdminDashboard,
} from "../api/queries";

// Mapping KPI card
function toKpi(raw: RawKpiCard): KpiCard {
  return {
    key: raw.key,
    label: raw.label,
    value: raw.value,
    unit: raw.unit,
    caption: raw.caption,
  };
}

// Mapping khoa hoc tren dashboard
function toCourse(raw: RawDashboardCourse): DashboardCourse {
  return {
    courseId: raw.course_id,
    title: raw.title,
    thumbnailUrl: raw.thumbnail_url,
    progressPercent: raw.progress_percent,
    score: raw.score,
  };
}

// Mapping thong bao
function toNotice(raw: RawDashboardNotice): DashboardNotice {
  return {
    id: raw.id,
    title: raw.title,
    content: raw.content,
    createdAt: raw.created_at,
  };
}

// Mapping mot phan phan bo
function toSlice(raw: RawSlice): DistributionSlice {
  return { label: raw.label, value: raw.value, percent: raw.percent };
}

// Mapping diem theo thang
function toTrend(raw: RawTrendPoint): ProgressTrendPoint {
  return { month: raw.month, averageScore: raw.average_score };
}

// Mapping dashboard hoc vien
export function toLearnerDashboard(raw: RawLearnerDashboard): LearnerDashboard {
  return {
    kpis: raw.kpis.map(toKpi),
    progressDistribution: raw.progress_distribution.map(toSlice),
    scoreTrend: raw.score_trend.map(toTrend),
    ongoingCourses: raw.ongoing_courses.map(toCourse),
    notices: raw.notices.map(toNotice),
  };
}

// Mapping dashboard quan tri
export function toAdminDashboard(raw: RawAdminDashboard): AdminDashboard {
  return {
    kpis: raw.kpis.map(toKpi),
    roleDistribution: raw.role_distribution.map(toSlice),
    recentCourses: raw.recent_courses.map(toCourse),
  };
}