import type { ReactElement } from "react";
import { ArrowLeft, Mail, Phone, Building2, Briefcase } from "lucide-react";
import { getInitials } from "@/core/lib/utils";
import { useUserDetail } from "../../hooks/useUserDetail";
import { userActions } from "../../state/actions";
import { StatusBadge } from "../components/StatusBadge";

// Panel chi tiet cong chuc ben phai (anh 2): avatar, thong tin, trang thai.
export function UserDetailPanel(): ReactElement {
  const { user, isLoading } = useUserDetail();

  if (isLoading) {
    return (
      <div className="rounded-card border border-slate-200 bg-white p-6 text-center text-sm text-ink-muted shadow-card">
        Đang tải thông tin...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-card border border-slate-200 bg-white p-6 text-center text-sm text-ink-muted shadow-card">
        Chọn một công chức để xem chi tiết
      </div>
    );
  }

  return (
    <div className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
      {/* Tieu de + nut quay lai */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-ink">Thông tin chi tiết</h2>
        <button
          type="button"
          onClick={() => userActions.selectUser(null)}
          className="flex items-center gap-1 text-sm text-brand-600 hover:underline"
        >
          <ArrowLeft size={14} /> Quay lại danh sách
        </button>
      </div>

      {/* Avatar + ten + trang thai */}
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-xl font-semibold text-brand-700">
          {getInitials(user.fullName)}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">{user.fullName}</h3>
            <StatusBadge status={user.status} />
          </div>
          <p className="text-sm text-ink-muted">Mã công chức: {user.staffCode}</p>
        </div>
      </div>

      {/* Thong tin lien he */}
      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-center gap-3 text-ink-muted">
          <Building2 size={16} /> <span>{user.department}</span>
        </div>
        <div className="flex items-center gap-3 text-ink-muted">
          <Briefcase size={16} /> <span>{user.position}</span>
        </div>
        <div className="flex items-center gap-3 text-ink-muted">
          <Mail size={16} /> <span>{user.email}</span>
        </div>
        {user.phone && (
          <div className="flex items-center gap-3 text-ink-muted">
            <Phone size={16} /> <span>{user.phone}</span>
          </div>
        )}
      </dl>
    </div>
  );
}