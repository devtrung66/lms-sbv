import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useSettings } from "../../hooks/useSettings";
import { SettingsForm } from "../modules/SettingsForm";

// Trang cai dat he thong (khu vuc quan tri).
export function SettingsPage(): ReactElement {
  const { settings, isLoading } = useSettings();

  return (
    <div>
      <PageHeader
        title="Cài đặt hệ thống"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Cài đặt hệ thống" },
        ]}
      />

      {isLoading || !settings ? (
        <div className="py-10 text-center text-sm text-ink-muted">Đang tải cấu hình...</div>
      ) : (
        <div className="max-w-3xl">
          <SettingsForm settings={settings} />
        </div>
      )}
    </div>
  );
}