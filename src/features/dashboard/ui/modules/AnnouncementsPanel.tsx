import type { ReactElement } from "react";
import { limitNotices } from "../../lib/utils";
import type { DashboardNotice } from "../../model/types";
import { NotificationItem } from "../components/NotificationItem";

interface AnnouncementsPanelProps {
  notices: DashboardNotice[];
}

// Panel "Thong bao moi" (anh 3): danh sach thong bao gan day.
export function AnnouncementsPanel({ notices }: AnnouncementsPanelProps): ReactElement {
  const visible = limitNotices(notices);

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-2 text-base font-semibold text-ink">Thông báo mới</h3>

      {visible.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-muted">Không có thông báo mới</p>
      ) : (
        <div>
          {visible.map((notice) => (
            <NotificationItem key={notice.id} notice={notice} />
          ))}
        </div>
      )}
    </div>
  );
}