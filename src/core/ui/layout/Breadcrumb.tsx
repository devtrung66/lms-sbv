import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Mot mat xich trong duong dan dieu huong
export interface BreadcrumbItem {
  label: string;
  // Neu co duong dan thi hien thi dang link, khong thi la chu thuong
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

// Hien thi duong dan phan cap: Trang chu / Quan tri / Nguoi dung
export function Breadcrumb({ items }: BreadcrumbProps): ReactElement {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-ink-muted" aria-label="Đường dẫn">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-brand-600">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-ink" : undefined}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} className="text-slate-400" />}
          </span>
        );
      })}
    </nav>
  );
}