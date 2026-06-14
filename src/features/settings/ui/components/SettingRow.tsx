import type { ReactElement, ReactNode } from "react";

interface SettingRowProps {
  label: string;
  description?: string;
  // O nhap lieu hoac dieu khien tuong ung
  children: ReactNode;
}

// Mot dong cau hinh: nhan + mo ta ben trai, o nhap lieu ben phai.
export function SettingRow({ label, description, children }: SettingRowProps): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-[1fr_280px] sm:items-center">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {description && <p className="text-xs text-ink-muted">{description}</p>}
      </div>
      <div>{children}</div>
    </div>
  );
}