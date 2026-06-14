import type { ReactElement } from "react";
import { Search } from "lucide-react";
import { userActions } from "../../state/actions";
import { useUserFilters } from "../../state/selectors";
import { ROLE_OPTIONS, STATUS_OPTIONS } from "../../model/constants";

// Thanh bo loc tren bang: phong/ban, vai tro, trang thai, o tim kiem (anh 2).
export function UserFilters(): ReactElement {
  const filters = useUserFilters();

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Loc theo vai tro */}
      <select
        value={filters.role ?? ""}
        onChange={(e) =>
          userActions.filterByRole((e.target.value || undefined) as never)
        }
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        <option value="">Tất cả vai trò</option>
        {ROLE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Loc theo trang thai */}
      <select
        value={filters.status ?? ""}
        onChange={(e) =>
          userActions.filterByStatus((e.target.value || undefined) as never)
        }
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        <option value="">Tất cả trạng thái</option>
        {STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* O tim kiem */}
      <div className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          defaultValue={filters.search}
          onChange={(e) => userActions.search(e.target.value)}
          placeholder="Tìm theo tên, email, mã CB..."
          className="w-56 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}