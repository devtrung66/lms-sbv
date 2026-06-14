import type { ReactElement } from "react";
import { FileText } from "lucide-react";

interface SlideViewerProps {
  src: string;
  type: "slide" | "document";
}

export function SlideViewer({ src, type }: SlideViewerProps): ReactElement {
  const isPdf = src.toLowerCase().endsWith(".pdf");
  const label = type === "slide" ? "Tep trinh chieu" : "Tai lieu";
  const linkClass = "rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600";

  if (isPdf) {
    return <iframe src={src} title="Trinh chieu" className="aspect-video w-full rounded-xl border border-slate-200" />;
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-slate-50">
      <FileText size={48} className="text-brand-500" />
      <p className="text-sm text-ink-muted">{label} khong xem truc tiep duoc.</p>
      <a href={src} target="_blank" rel="noopener noreferrer" className={linkClass}>Tai xuong de xem</a>
    </div>
  );
}