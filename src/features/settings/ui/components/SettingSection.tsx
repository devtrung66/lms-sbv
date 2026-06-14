import type { ReactElement, ReactNode } from "react";

interface SettingSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

// Khoi bao boc mot nhom cau hinh (vd "Thong tin chung", "Bai kiem tra").
export function SettingSection({
  title,
  description,
  children,
}: SettingSectionProps): ReactElement {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 border-b border-slate-100 pb-3">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        {description && <p className="mt-0.5 text-sm text-ink-muted">{description}</p>}
      </div>
      <div className="divide-y divide-slate-50">{children}</div>
    </div>
  );
}