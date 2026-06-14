import type { ReactElement } from "react";

interface ProgressRingProps {
  // Phan tram hoan thanh (0-100)
  percent: number;
  // Duong kinh vong tron (px)
  size?: number;
  // Do day vien (px)
  strokeWidth?: number;
  // Nhan hien thi duoi so phan tram
  label?: string;
}

// Vong tron tien do ve bang SVG (giong vong "68% Hoan thanh" o anh 3).
export function ProgressRing({
  percent,
  size = 160,
  strokeWidth = 14,
  label = "Hoàn thành",
}: ProgressRingProps): ReactElement {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, percent));
  // Phan vong chua to mau (cang it phan tram, dash offset cang lon)
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Vong nen */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        {/* Vong tien do */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-brand-500)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      {/* So phan tram o giua */}
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-ink">{clamped}%</span>
        <span className="text-xs text-ink-muted">{label}</span>
      </div>
    </div>
  );
}