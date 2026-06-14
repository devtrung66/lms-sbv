import type { DistributionSlice } from "@/features/reports";
import type { ProgressTrendPoint } from "@/features/progress";

// The chi so tren dashboard (KPI card)
export interface KpiCard {
  // Khoa nhan dien de chon icon o tang UI
  key: string;
  label: string;
  value: number;
  unit?: string;
  // Chu thich phu (vd "85.6 điểm")
  caption?: string;
}

// Khoa hoc tom tat hien thi tren dashboard (dang hoc / gan day)
export interface DashboardCourse {
  courseId: string;
  title: string;
  thumbnailUrl?: string;
  // Phan tram tien do hoac diem (tuy ngu canh)
  progressPercent: number;
  // Diem (neu la khoa da hoc xong)
  score?: number;
}

// Mot thong bao tren dashboard
export interface DashboardNotice {
  id: string;
  title: string;
  content: string;
  // Thoi diem (ISO string)
  createdAt: string;
}

// Du lieu dashboard hoc vien (anh 3)
export interface LearnerDashboard {
  kpis: KpiCard[];
  // Phan bo trang thai hoc tap cho vong tron
  progressDistribution: DistributionSlice[];
  // Bieu do ket qua hoc tap theo thang
  scoreTrend: ProgressTrendPoint[];
  // Khoa hoc dang hoc
  ongoingCourses: DashboardCourse[];
  // Thong bao moi
  notices: DashboardNotice[];
}

// Du lieu dashboard quan tri (anh 2)
export interface AdminDashboard {
  kpis: KpiCard[];
  // Phan bo vai tro nguoi dung
  roleDistribution: DistributionSlice[];
  // Khoa hoc gan day (kem diem)
  recentCourses: DashboardCourse[];
}