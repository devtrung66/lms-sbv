import { useRef, useState, type ReactElement } from "react";
import { CheckCircle2, Clock, FileText, ClipboardCheck, Users, Lock } from "lucide-react";
import { VideoPlayer } from "@/core/ui/primitives/VideoPlayer";
import { SlideViewer } from "@/core/ui/primitives/SlideViewer";
import { cn } from "@/core/lib/utils";
import { useLessonPlayer } from "../../hooks/useLessonPlayer";
import type { Lesson } from "@/features/courses";

interface CoursePlayerProps {
  lesson: Lesson;
}

// Cac muc "ban se hoc duoc" (tam co dinh cho moc giao dien)
const LEARNING_OUTCOMES = [
  "Hieu duoc cac buoc trong quy trinh thanh tra tai cho",
  "Nhan dien va danh gia rui ro trong qua trinh thanh tra",
  "Lap ke hoach va thuc hien thanh tra hieu qua",
  "Xu ly va lap bao cao ket luan thanh tra",
];

// Cot trai phong hoc: video + tab noi dung/ghi chu + thong tin bai.
export function CoursePlayer({ lesson }: CoursePlayerProps): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tab, setTab] = useState<"content" | "note">("content");
  const [note, setNote] = useState("");
  const { resumePosition, completed, canMarkComplete, handleTimeUpdate, markComplete } =
    useLessonPlayer(lesson);

  // Phut tu giay
  const minutes = lesson.durationSeconds ? Math.round(lesson.durationSeconds / 60) : 0;

  return (
    <div className="space-y-4">
      {/* Tieu de bai + trang thai */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">{lesson.title}</h2>
        {completed && (
          <span className="flex items-center gap-1 text-sm text-green-600">
            <CheckCircle2 size={16} /> Da hoan thanh
          </span>
        )}
      </div>

      {/* Khu vuc video / trinh chieu */}
      <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
        {lesson.type === "video" && lesson.mediaUrl ? (
          <VideoPlayer ref={videoRef} src={lesson.mediaUrl} resumePosition={resumePosition} onTimeUpdate={handleTimeUpdate} />
        ) : lesson.type !== "video" && lesson.mediaUrl ? (
          <SlideViewer src={lesson.mediaUrl} type={lesson.type} />
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-center text-white">
            <div className="text-3xl font-bold uppercase tracking-wide">{lesson.title}</div>
            <div className="mt-2 text-sm text-white/70">Cuc Quan ly, giam sat to chuc tin dung</div>
          </div>
        )}
      </div>

      {/* Nut danh dau hoan thanh cho bai khong phai video */}
      {canMarkComplete && (
        <div className="flex justify-end">
          <button type="button" onClick={markComplete} className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
            <CheckCircle2 size={16} /> Danh dau da hoan thanh
          </button>
        </div>
      )}

      {/* Tab Noi dung / Ghi chu */}
      <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
        <div className="mb-4 flex gap-6 border-b border-slate-100">
          <button type="button" onClick={() => setTab("content")} className={cn("pb-2 text-sm font-medium", tab === "content" ? "border-b-2 border-brand-500 text-brand-700" : "text-ink-muted")}>
            Noi dung bai hoc
          </button>
          <button type="button" onClick={() => setTab("note")} className={cn("pb-2 text-sm font-medium", tab === "note" ? "border-b-2 border-brand-500 text-brand-700" : "text-ink-muted")}>
            Ghi chu cua toi
          </button>
        </div>

        {tab === "content" ? (
          <div>
            <p className="text-sm text-ink-muted">
              Bai hoc nay cung cap kien thuc ve {lesson.title.toLowerCase()} doi voi to chuc tin dung theo quy dinh hien hanh.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">Ban se hoc duoc</p>
            <ul className="mt-2 space-y-1.5">
              {LEARNING_OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            placeholder="Ghi chu cua ban cho bai hoc nay..."
            className="form-input w-full resize-none"
          />
        )}
      </div>

      {/* Box thong tin bai hoc */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-card border border-slate-200 bg-white p-4 text-center shadow-card">
          <Clock size={18} className="mx-auto text-brand-500" />
          <p className="mt-1 text-xs text-ink-muted">Thoi luong</p>
          <p className="text-sm font-semibold text-ink">{minutes} phut</p>
        </div>
        <div className="rounded-card border border-slate-200 bg-white p-4 text-center shadow-card">
          <FileText size={18} className="mx-auto text-brand-500" />
          <p className="mt-1 text-xs text-ink-muted">Tai lieu</p>
          <p className="text-sm font-semibold text-ink">1 tai lieu</p>
        </div>
        <div className="rounded-card border border-slate-200 bg-white p-4 text-center shadow-card">
          <ClipboardCheck size={18} className="mx-auto text-brand-500" />
          <p className="mt-1 text-xs text-ink-muted">Bai kiem tra</p>
          <p className="text-sm font-semibold text-ink">5 cau hoi</p>
        </div>
        <div className="rounded-card border border-slate-200 bg-white p-4 text-center shadow-card">
          <Users size={18} className="mx-auto text-brand-500" />
          <p className="mt-1 text-xs text-ink-muted">Da hoan thanh</p>
          <p className="text-sm font-semibold text-ink">78%</p>
        </div>
      </div>

      {/* Banner mo khoa bai tiep theo */}
      {!completed && (
        <div className="flex items-center gap-2 rounded-card border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          <Lock size={16} /> Hoan thanh bai hoc va dat yeu cau bai kiem tra de mo khoa bai tiep theo
        </div>
      )}
    </div>
  );
}