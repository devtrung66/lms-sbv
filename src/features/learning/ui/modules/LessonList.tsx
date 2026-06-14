import type { ReactElement } from "react";
import { learningActions } from "../../state/actions";
import { useActiveLessonId } from "../../state/selectors";
import { useLearningStore } from "../../state/store";
import { LessonSidebar } from "../components/LessonSidebar";
import type { Lesson } from "@/features/courses";

interface LessonListProps {
  lessons: Lesson[];
}

// Boc LessonSidebar, lay tien do va bai dang chon tu store.
export function LessonList({ lessons }: LessonListProps): ReactElement {
  const activeLessonId = useActiveLessonId();
  const progress = useLearningStore((state) => state.progress);

  return (
    <LessonSidebar
      lessons={lessons}
      progress={progress}
      activeLessonId={activeLessonId}
      onSelect={learningActions.selectLesson}
    />
  );
}