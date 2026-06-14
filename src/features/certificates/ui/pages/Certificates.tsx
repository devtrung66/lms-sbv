import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useCertificates } from "../../hooks/useCertificates";
import { CertificateCard } from "../components/CertificateCard";

export function CertificatesPage(): ReactElement {
  const { certificates, isLoading } = useCertificates();
  return (
    <div>
      <PageHeader
        title="Chung chi cua toi"
        description="Cac chung chi ban da dat duoc khi hoan thanh khoa hoc"
        breadcrumb={[
          { label: "Trang chu", to: ROUTES.home },
          { label: "Chung chi" },
        ]}
      />
      {isLoading ? (
        <div className="py-10 text-center text-sm text-ink-muted">Dang tai chung chi...</div>
      ) : certificates.length === 0 ? (
        <div className="py-10 text-center text-sm text-ink-muted">Ban chua co chung chi nao</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <CertificateCard key={c.id} certificate={c} />
          ))}
        </div>
      )}
    </div>
  );
}