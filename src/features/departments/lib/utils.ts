import { COMPLETION_THRESHOLDS } from "../model/constants";

// Cac tien ich nho rieng cho module departments.

// Tra ve lop mau cho ty le hoan thanh theo nguong (cao/trung binh/thap)
export function completionColorClass(rate: number): string {
  if (rate >= COMPLETION_THRESHOLDS.high) return "text-green-600";
  if (rate >= COMPLETION_THRESHOLDS.medium) return "text-amber-600";
  return "text-red-600";
}

// Tinh ty le cong chuc dang hoat dong cua phong (phan tram)
export function activeRatio(active: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((active / total) * 100);
}