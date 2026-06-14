import type { ReactElement } from "react";
import { Video, Presentation, FileText } from "lucide-react";
import type { LessonType } from "../../model/types";

interface MediaThumbProps {
  type: LessonType;
  size?: number;
}

// Icon dai dien cho tung loai media (video/slide/tai lieu).
export function MediaThumb({ type, size = 18 }: MediaThumbProps): ReactElement {
  if (type === "video") {
    return <Video size={size} className="text-brand-600" />;
  }
  if (type === "slide") {
    return <Presentation size={size} className="text-amber-600" />;
  }
  return <FileText size={size} className="text-slate-500" />;
}