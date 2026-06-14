import { useRef, useState, type ReactElement, type DragEvent } from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { ACCEPTED_MEDIA } from "../../model/constants";
import type { LessonType } from "../../model/types";

interface UploadDropzoneProps {
  type: LessonType;
  // Goi khi nguoi dung chon hoac tha tep
  onFile: (file: File) => void;
  disabled?: boolean;
}

// Vung keo tha tep media. Ho tro ca bam de chon va keo tha.
export function UploadDropzone({ type, onFile, disabled }: UploadDropzoneProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  // Xu ly khi tha tep vao vung
  function handleDrop(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFile(file);
  }

  return (
    <div
      onClick={() => !disabled && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed p-8 text-center transition-colors",
        dragging ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:border-brand-400",
        disabled && "pointer-events-none opacity-60"
      )}
    >
      <UploadCloud size={36} className="text-brand-500" />
      <p className="text-sm font-medium text-ink">
        Kéo thả tệp vào đây hoặc bấm để chọn
      </p>
      <p className="text-xs text-ink-muted">Định dạng chấp nhận: {ACCEPTED_MEDIA[type]}</p>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_MEDIA[type]}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
        }}
      />
    </div>
  );
}