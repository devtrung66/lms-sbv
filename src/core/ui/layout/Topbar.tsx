import { useState, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, ChevronDown, LogOut } from "lucide-react";
import { useRootStore } from "@/core/state/rootStore";
import { getInitials } from "@/core/lib/utils";
import { ROUTES } from "@/app/router/routes";
import { authActions } from "@/features/auth";
import { useNotifications, NotificationBell, NotificationDropdown, useNotificationStore } from "@/features/notifications";

interface TopbarProps {
  userName: string;
  roleLabel: string;
}

// Thanh tieu de tren cung: nut thu gon sidebar, chuong thong bao, ho so + dang xuat.
export function Topbar({ userName, roleLabel }: TopbarProps): ReactElement {
  const navigate = useNavigate();
  const toggleSidebar = useRootStore((state) => state.toggleSidebar);
  const { unreadCount } = useNotifications();
  const toggleDropdown = useNotificationStore((state) => state.toggleDropdown);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dang xuat: xoa phien roi ve trang dang nhap
  async function handleLogout(): Promise<void> {
    await authActions.logout();
    setMenuOpen(false);
    navigate(ROUTES.login, { replace: true });
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <button type="button" onClick={toggleSidebar} className="rounded-lg p-2 text-ink-muted hover:bg-slate-100" aria-label="Thu gon thanh dieu huong">
        <Menu size={20} />
      </button>

      <div className="flex items-center gap-4">
        {/* Chuong thong bao */}
        <div className="relative">
          <NotificationBell unreadCount={unreadCount} onClick={toggleDropdown} />
          <NotificationDropdown />
        </div>

        {/* Ho so nguoi dung + menu dang xuat */}
        <div className="relative">
          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="flex items-center gap-3 rounded-lg p-1 pr-2 hover:bg-slate-100">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">{getInitials(userName)}</span>
            <span className="text-left leading-tight">
              <span className="block text-sm font-semibold text-ink">{userName}</span>
              <span className="block text-xs text-ink-muted">{roleLabel}</span>
            </span>
            <ChevronDown size={16} className="text-ink-muted" />
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                <button type="button" onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50">
                  <LogOut size={16} /> Dang xuat
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}