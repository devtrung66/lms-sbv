import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  ClipboardCheck,
  Users,
  Building2,
  ShieldCheck,
  GraduationCap,
  Database,
  BarChart3,
  Settings,
  Award,
} from "lucide-react";
import { cn } from "@/core/lib/utils";
import { ROUTES } from "@/app/router/routes";
import { useRootStore } from "@/core/state/rootStore";

// Mot muc dieu huong tren sidebar
interface NavItem {
  label: string;
  to: string;
  icon: ReactElement;
}

// Nhom muc danh cho hoc vien
const learnerItems: NavItem[] = [
  { label: "Trang chủ", to: ROUTES.home, icon: <LayoutDashboard size={18} /> },
  { label: "Khóa học của tôi", to: ROUTES.myCourses, icon: <BookOpen size={18} /> },
  { label: "Tiến độ học tập", to: ROUTES.progress, icon: <TrendingUp size={18} /> },
  { label: "Kết quả kiểm tra", to: ROUTES.quizResult, icon: <ClipboardCheck size={18} /> },
  { label: "Chứng chỉ", to: ROUTES.certificates, icon: <Award size={18} /> },
];

// Nhom muc danh cho quan tri he thong
const adminItems: NavItem[] = [
  { label: "Quản trị người dùng", to: ROUTES.users, icon: <Users size={18} /> },
  { label: "Phòng / Ban", to: ROUTES.departments, icon: <Building2 size={18} /> },
  { label: "Phân quyền", to: ROUTES.roles, icon: <ShieldCheck size={18} /> },
  { label: "Quản lý khóa học", to: ROUTES.courses, icon: <GraduationCap size={18} /> },
  { label: "Ngân hàng câu hỏi", to: ROUTES.questionBank, icon: <Database size={18} /> },
  { label: "Báo cáo thống kê", to: ROUTES.reports, icon: <BarChart3 size={18} /> },
  { label: "Cài đặt hệ thống", to: ROUTES.settings, icon: <Settings size={18} /> },
];

// Mau chung cho moi dong dieu huong, doi mau khi dang chon
function renderItem(item: NavItem): ReactElement {
  return (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === ROUTES.home}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          isActive
            ? "bg-brand-500 text-white"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        )
      }
    >
      {item.icon}
      <span>{item.label}</span>
    </NavLink>
  );
}

// Thanh dieu huong ben trai, nen xanh dam theo nhan dien co quan nha nuoc
export function Sidebar(): ReactElement {
  const collapsed = useRootStore((state) => state.sidebarCollapsed);

  return (
    <aside
      className={cn(
        "flex h-full flex-col bg-brand-700 text-white transition-all",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Khu vuc thuong hieu */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-transparent">
          <img src="/logo.svg" alt="Logo" className="h-full w-full object-contain" />
        </div>
        {!collapsed && (
          <div className="leading-tight">
            <p className="text-sm font-bold uppercase">Cục Quản lý, giám sát</p>
            <p className="text-xs text-slate-300">Tổ chức tín dụng</p>
          </div>
        )}
      </div>

      {/* Danh sach muc dieu huong */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
        {learnerItems.map(renderItem)}

        {!collapsed && (
          <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Quản trị hệ thống
          </p>
        )}
        {adminItems.map(renderItem)}
      </nav>
    </aside>
  );
}