# Module: dashboard

Trang tong quan: dashboard hoc vien (anh 3) va dashboard quan tri (anh 2).

## Chuc nang
- Dashboard hoc vien: loi chao, KPI, tien do hoc tap, bieu do ket qua,
  khoa hoc dang hoc, thong bao moi.
- Dashboard quan tri: KPI, phan bo vai tro, khoa hoc gan day.

## Cau truc
- `model/` types (LearnerDashboard, AdminDashboard), hang so (KPI_ICON_MAP).
- `api/` endpoints, queries.
- `adapters/` dashboardAdapter.
- `services/` dashboardService.
- `state/` store (che do xem learner/admin).
- `hooks/` useLearnerDashboard, useAdminDashboard.
- `lib/` greetingByHour, limitCourses, limitNotices.
- `ui/` KpiCard, MiniCourseCard, NotificationItem, IconMap, DonutChart, LineChart /
  KpiRow, LearningProgressPanel, RecentCoursesPanel, AnnouncementsPanel /
  LearnerHome, AdminDashboard.

## Tai su dung
- LineChart boc lai TrendChart cua module progress.
- DonutChart + bang phan bo dung DistributionSlice cua module reports.
- KPI_ICON_MAP tach ten icon khoi component (UI tu map qua IconMap).

## Public API
Import qua `@/features/dashboard`: hooks, dashboardService, types.