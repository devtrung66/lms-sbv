import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";

interface ProgressBarProps {
  // Phan tram hoan thanh (0-100)
  percent: number;
  // Hien thi nhan phan tram ben canh hay khong
  showLabel?: boolean;
  // Mau thanh tien do (theo trang thai)
  variant?: "brand" | "success" | "warning";
}

const VARIANT_COLORS: Record<NonNullable<ProgressBarProps["variant"]>, string> = {
  brand: "bg-brand-500",
  success: "bg-green-500",
  warning: "bg-amber-500",
};

// Thanh tien do hoc tap, dung lai o nhieu noi (the khoa, phong hoc).
export function ProgressBar({
  percent,
  showLabel = false,
  variant = "brand",
}: ProgressBarProps): ReactElement {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={cn("h-full rounded-full transition-all", VARIANT_COLORS[variant])}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 text-xs font-medium text-ink-muted">{clamped}%</span>
      )}
    </div>
  );
}