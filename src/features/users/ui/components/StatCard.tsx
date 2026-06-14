import type { ReactElement, ReactNode } from "react";
import { cn } from "@/core/lib/utils";
import { formatNumber } from "@/core/lib/format";

interface StatCardProps {
  // Nhan mo ta (vd "Tổng số công chức")
  label: string;
  // Gia tri so chinh
  value: number;
  // Don vi hien thi ben duoi (vd "Người", "Phòng/ban")
  unit?: string;
  // Chu thich phu (vd "96.9%")
  caption?: string;
  // Icon dai dien (lucide-react)
  icon: ReactNode;
  // Mau nen vung icon (lop mau Tailwind)
  iconClassName?: string;
}

// The thong ke o dau trang quan tri (giong cac the o anh 2).
export function StatCard({
  label,
  value,
  unit,
  caption,
  icon,
  iconClassName = "bg-brand-50 text-brand-600",
}: StatCardProps): ReactElement {
  return (
    <div className="flex items-center gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
      {/* Vung icon tron */}
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          iconClassName
        )}
      >
        {icon}
      </div>

      {/* Noi dung so lieu */}
      <div className="min-w-0">
        <p className="truncate text-sm text-ink-muted">{label}</p>
        <p className="text-2xl font-bold text-ink">{formatNumber(value)}</p>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          {unit && <span>{unit}</span>}
          {caption && <span className="text-brand-600">{caption}</span>}
        </div>
      </div>
    </div>
  );
}