import { useEffect, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { buildPath, ROUTES } from "@/app/router/routes";
import { learningService } from "../../services/learningService";
import { learningActions } from "../../state/actions";
import { useActiveLessonId } from "../../state/selectors";
import { useProgressSync } from "../../hooks/useProgressSync";
import { canTakeFinalQuiz } from "../../lib/utils";
import { CoursePlayer } from "../modules/CoursePlayer";
import { LessonList } from "../modules/LessonList";

// Phong hoc: trinh phat ben trai + danh sach bai ben phai.
// Tu nap tien do ban dau va dong bo dinh ky.
export function CourseRoomPage(): ReactElement {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const activeLessonId = useActiveLessonId();

  // Tai du lieu phong hoc
  const { data: room, isLoading } = useQuery({
    queryKey: ["course-room", courseId],
    queryFn: () => learningService.getCourseRoom(courseId as string),
    enabled: Boolean(courseId),
  });

  // Dong bo tien do dinh ky cho khoa nay
  useProgressSync(courseId ?? "");

  // Nap tien do ban dau + chon bai dau tien khi co du lieu
  useEffect(() => {
    if (room) {
      learningActions.loadProgress(room.lessonProgress);
      if (!activeLessonId && room.lessons[0]) {
        learningActions.selectLesson(room.lessons[0].id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  if (isLoading || !room) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải phòng học...</div>;
  }

  // Tim bai dang xem
  const activeLesson =
    room.lessons.find((l) => l.id === activeLessonId) ?? room.lessons[0];

  // Du dieu kien lam bai kiem tra cuoi khoa
  const quizReady = canTakeFinalQuiz(room.course);

  return (
    <div>
      <PageHeader
        title={room.course.title}
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Khóa học của tôi", to: ROUTES.myCourses },
          { label: room.course.title },
        ]}
        actions={
          quizReady && (
            <button
              type="button"
              onClick={() =>
                navigate(buildPath(ROUTES.quizTake, { quizId: room.course.courseId }))
              }
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              <FileQuestion size={16} /> Làm bài kiểm tra
            </button>
          )
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        {activeLesson && <CoursePlayer lesson={activeLesson} />}
        <LessonList lessons={room.lessons} />
      </div>
    </div>
  );
}