import { useState, type ReactElement } from "react";
import { Users, UserCheck, UserX, Lock, Building2, FileUp, Plus } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { formatPercent } from "@/core/lib/format";
import { DepartmentStatsTable } from "@/features/departments";
import { StatCard } from "../components/StatCard";
import { UserFilters } from "../modules/UserFilters";
import { UserTable } from "../modules/UserTable";
import { UserDetailPanel } from "../modules/UserDetailPanel";
import { ImportExcelModal } from "../modules/ImportExcelModal";
import { useUserStats } from "../../hooks/useUserStats";

// Trang quan tri nguoi dung (anh 2): the thong ke + bang + panel + thong ke phong/ban.
export function UserListPage(): ReactElement {
  const [importOpen, setImportOpen] = useState(false);
  const { stats } = useUserStats();

  // Tinh chu thich phan tram cho cac the (an toan khi chua co du lieu)
  const total = stats?.total ?? 0;
  const ratio = (part: number): string =>
    total > 0 ? formatPercent(part / total) : "";

  return (
    <div>
      <PageHeader
        title="Quản trị người dùng"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Người dùng" },
        ]}
        actions={
          <>
            <button
              type="button"
              onClick={() => setImportOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-ink hover:bg-slate-50"
            >
              <FileUp size={16} /> Import Excel
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              <Plus size={16} /> Thêm người dùng
            </button>
          </>
        }
      />

      {/* Hang the thong ke - lay tu du lieu that */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard label="Tổng số công chức" value={stats?.total ?? 0} unit="Người" icon={<Users size={20} />} />
        <StatCard label="Hoạt động" value={stats?.active ?? 0} caption={ratio(stats?.active ?? 0)} icon={<UserCheck size={20} />} iconClassName="bg-green-50 text-green-600" />
        <StatCard label="Chưa kích hoạt" value={stats?.inactive ?? 0} caption={ratio(stats?.inactive ?? 0)} icon={<UserX size={20} />} iconClassName="bg-amber-50 text-amber-600" />
        <StatCard label="Đã khóa" value={stats?.locked ?? 0} caption={ratio(stats?.locked ?? 0)} icon={<Lock size={20} />} iconClassName="bg-red-50 text-red-600" />
        <StatCard label="Số phòng/ban" value={stats?.departmentCount ?? 0} unit="Phòng/ban" icon={<Building2 size={20} />} iconClassName="bg-cyan-50 text-cyan-600" />
      </div>

      {/* Bang + panel chi tiet */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold text-ink">Danh sách công chức</h2>
          </div>
          <div className="mb-4"><UserFilters /></div>
          <UserTable />
        </div>
        <UserDetailPanel />
      </div>

      {/* Thong ke theo phong/ban (dung lai tu module departments) */}
      <div className="mt-6">
        <DepartmentStatsTable />
      </div>

      <ImportExcelModal open={importOpen} onClose={() => setImportOpen(false)} />
    </div>
  );
}