import type { ReactElement } from "react";
import { Megaphone } from "lucide-react";
import { formatDate } from "@/core/lib/date";
import { truncate } from "@/core/lib/utils";
import type { DashboardNotice } from "../../model/types";

interface NotificationItemProps {
  notice: DashboardNotice;
}

// Mot dong thong bao tren dashboard (giong "Thong bao moi" o anh 3).
export function NotificationItem({ notice }: NotificationItemProps): ReactElement {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-0">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Megaphone size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-ink">{notice.title}</p>
          <span className="shrink-0 text-xs text-ink-muted">{formatDate(notice.createdAt)}</span>
        </div>
        <p className="mt-0.5 text-xs text-ink-muted">{truncate(notice.content, 120)}</p>
      </div>
    </div>
  );
}