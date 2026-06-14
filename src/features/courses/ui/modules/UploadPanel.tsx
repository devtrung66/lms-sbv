import { useState, type ReactElement } from "react";
import { LESSON_TYPE_LABELS } from "../../model/constants";
import { useMediaUpload } from "../../hooks/useMediaUpload";
import { useUploads } from "../../state/selectors";
import { formatFileSize } from "../../lib/utils";
import type { LessonType } from "../../model/types";
import { UploadDropzone } from "../components/UploadDropzone";

interface UploadPanelProps {
  courseId: string;
}

// Khu vuc tai len media cho khoa hoc: chon loai, keo tha tep, xem tien do.
export function UploadPanel({ courseId }: UploadPanelProps): ReactElement {
  const [type, setType] = useState<LessonType>("video");
  const [title, setTitle] = useState("");
  const { upload, error } = useMediaUpload(courseId);
  const uploads = useUploads();

  // Xu ly khi nhan duoc tep tu vung keo tha
  async function handleFile(file: File): Promise<void> {
    const lessonTitle = title.trim() || file.name;
    await upload(file, type, lessonTitle);
    setTitle("");
  }

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Tải lên bài học</h3>

      {/* Chon loai bai hoc */}
      <div className="mb-3 flex gap-2">
        {(Object.keys(LESSON_TYPE_LABELS) as LessonType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={
              t === type
                ? "rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-medium text-white"
                : "rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-ink hover:bg-slate-50"
            }
          >
            {LESSON_TYPE_LABELS[t]}
          </button>
        ))}
      </div>

      {/* Tieu de bai hoc */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề bài học (để trống sẽ lấy theo tên tệp)"
        className="form-input mb-3"
      />

      {/* Vung keo tha */}
      <UploadDropzone type={type} onFile={handleFile} />

      {error && <p className="mt-3 text-sm text-danger">{error}</p>}

      {/* Danh sach tien do tai len */}
      {uploads.length > 0 && (
        <div className="mt-4 space-y-2">
          {uploads.map((u) => (
            <div key={u.fileName}>
              <div className="flex items-center justify-between text-xs text-ink-muted">
                <span className="truncate">{u.fileName}</span>
                <span>{u.percent}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={
                    u.status === "error"
                      ? "h-full bg-danger"
                      : "h-full bg-brand-500 transition-all"
                  }
                  style={{ width: `${u.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}