import type { DistributionSlice } from "../model/types";

// Cac tien ich nho rieng cho module reports.

// Dinh dang phan tram thay doi: 12 -> "+12%", -5 -> "-5%"
export function formatChange(change?: number): string | null {
  if (change === undefined) return null;
  const sign = change > 0 ? "+" : "";
  return `${sign}${change}%`;
}

// Lop mau cho phan tram thay doi (tang xanh, giam do)
export function changeColorClass(change?: number): string {
  if (change === undefined) return "text-ink-muted";
  return change >= 0 ? "text-green-600" : "text-red-600";
}

// Tinh tong gia tri cua cac phan phan bo
export function totalDistribution(slices: DistributionSlice[]): number {
  return slices.reduce((sum, s) => sum + s.value, 0);
}