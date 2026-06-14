import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/features/auth";
import { ROLE_LABELS } from "@/features/users/model/constants";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

// Khung bo cuc chinh sau khi dang nhap: sidebar trai + topbar tren + noi dung.
// Lay thong tin nguoi dung tu phien dang nhap that.
export function AppShell(): ReactElement {
  const user = useAuthStore((state) => state.user);

  // Ten + nhan vai tro hien thi tren topbar
  const userName = user?.fullName ?? "Người dùng";
  const roleLabel = user ? ROLE_LABELS[user.role] : "";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar userName={userName} roleLabel={roleLabel} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}