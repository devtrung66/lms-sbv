// Cac hang so rieng cua module progress.

// Cac moc thoi gian de loc bieu do ket qua hoc tap
export const TREND_RANGES = [
  { label: "3 tháng gần đây", value: 3 },
  { label: "6 tháng gần đây", value: 6 },
  { label: "12 tháng gần đây", value: 12 },
] as const;

// Khoang thoi gian mac dinh khi mo bieu do (so thang)
export const DEFAULT_TREND_MONTHS = 6;

// Mau sac cho cac trang thai trong bieu do tron tien do
export const PROGRESS_CHART_COLORS = {
  completed: "#16a34a",
  inProgress: "#2563eb",
  notStarted: "#f59e0b",
  overdue: "#dc2626",
} as const;