import type { ReactElement } from "react";
import { Award, Download, QrCode } from "lucide-react";
import { formatDate } from "@/core/lib/date";
import type { Certificate } from "../../model/types";

interface CertificateCardProps {
  certificate: Certificate;
}

// The chung chi hoan thanh (giong mau chung chi o anh).
export function CertificateCard({ certificate }: CertificateCardProps): ReactElement {
  return (
    <div className="overflow-hidden rounded-card border-2 border-amber-200 bg-white shadow-card">
      <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
      <div className="p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
          <Award size={32} className="text-amber-500" />
        </div>
        <p className="mt-3 text-xs uppercase tracking-widest text-ink-muted">Chung chi hoan thanh</p>
        <p className="mt-1 text-sm font-semibold uppercase text-brand-700">Cuc Quan ly, giam sat to chuc tin dung</p>
        <p className="mt-4 text-xs text-ink-muted">Chung nhan</p>
        <p className="text-lg font-bold text-ink">{certificate.learnerName}</p>
        <p className="mt-2 text-xs text-ink-muted">da hoan thanh khoa hoc</p>
        <p className="text-sm font-semibold text-ink">{certificate.courseTitle}</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div>
            <p className="text-xs text-ink-muted">Diem so</p>
            <p className="font-bold text-brand-600">{certificate.score}/100</p>
          </div>
          <div>
            <p className="text-xs text-ink-muted">Ngay cap</p>
            <p className="font-semibold text-ink">{formatDate(certificate.issuedAt)}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-muted">
          <QrCode size={28} className="text-ink" />
          <span>Ma so: {certificate.certificateCode}</span>
        </div>
        <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
          <Download size={16} /> Tai chung chi (PDF)
        </button>
      </div>
    </div>
  );
}