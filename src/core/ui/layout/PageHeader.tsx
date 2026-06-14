import type { ReactElement, ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";

interface PageHeaderProps {
  // Tieu de lon cua trang
  title: string;
  // Mo ta phu duoi tieu de (tuy chon)
  description?: string;
  // Duong dan phan cap (tuy chon)
  breadcrumb?: BreadcrumbItem[];
  // Khu vuc nut hanh dong ben phai (vd: Them moi, Import Excel)
  actions?: ReactNode;
}

// Tieu de trang dung chung: breadcrumb + tieu de + mo ta + nut hanh dong
export function PageHeader({
  title,
  description,
  breadcrumb,
  actions,
}: PageHeaderProps): ReactElement {
  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div>
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="mb-2">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        <h1 className="text-2xl font-bold text-ink">{title}</h1>
        {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}