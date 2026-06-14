import type { ReactElement } from "react";
import { CheckCheck } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useNotificationMutation } from "../../hooks/useNotificationMutation";
import { NotificationList } from "../modules/NotificationList";

// Trang danh sach day du thong bao cua nguoi dung.
export function NotificationsPage(): ReactElement {
  const { markAllRead, isMarkingAll } = useNotificationMutation();

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Thông báo"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Thông báo" },
        ]}
        actions={
          <button
            type="button"
            onClick={() => markAllRead()}
            disabled={isMarkingAll}
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-ink hover:bg-slate-50 disabled:opacity-60"
          >
            <CheckCheck size={16} /> Đánh dấu tất cả đã đọc
          </button>
        }
      />
      <NotificationList />
    </div>
  );
}