import { useState, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { mediaUploadService } from "../services/mediaUploadService";
import { useCourseStore } from "../state/store";
import { COURSE_LESSONS_KEY } from "./useCourseDetail";
import type { Lesson, LessonType } from "../model/types";

// Hook xu ly tai media (video/slide) cho mot khoa hoc, co theo doi tien do.
export function useMediaUpload(courseId: string) {
  const queryClient = useQueryClient();
  const setUploadProgress = useCourseStore((state) => state.setUploadProgress);
  const [error, setError] = useState<string | null>(null);

  // Tai mot tep len; cap nhat tien do vao store trong qua trinh tai
  const upload = useCallback(
    async (file: File, type: LessonType, title: string): Promise<Lesson | null> => {
      setError(null);

      // Danh dau bat dau
      setUploadProgress({ fileName: file.name, percent: 0, status: "uploading" });

      try {
        const lesson = await mediaUploadService.upload(
          courseId,
          file,
          type,
          title,
          (percent) =>
            setUploadProgress({ fileName: file.name, percent, status: "uploading" })
        );

        // Danh dau hoan tat
        setUploadProgress({ fileName: file.name, percent: 100, status: "done" });

        // Lam moi danh sach bai hoc cua khoa
        void queryClient.invalidateQueries({
          queryKey: [COURSE_LESSONS_KEY, courseId],
        });

        return lesson;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Tải tệp lên thất bại";
        setError(message);
        setUploadProgress({ fileName: file.name, percent: 0, status: "error" });
        return null;
      }
    },
    [courseId, queryClient, setUploadProgress]
  );

  return { upload, error };
}