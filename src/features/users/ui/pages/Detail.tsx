import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { userActions } from "../../state/actions";
import { UserDetailPanel } from "../modules/UserDetailPanel";

// Trang chi tiet cong chuc doc lap (truy cap truc tiep qua URL co :userId).
export function UserDetailPage(): ReactElement {
  const { userId } = useParams<{ userId: string }>();

  // Dong bo id tren URL vao store de panel hien thi dung nguoi
  useEffect(() => {
    if (userId) userActions.selectUser(userId);
  }, [userId]);

  return (
    <div>
      <PageHeader
        title="Chi tiết công chức"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị người dùng", to: ROUTES.users },
          { label: "Chi tiết" },
        ]}
      />
      <div className="max-w-xl">
        <UserDetailPanel />
      </div>
    </div>
  );
}