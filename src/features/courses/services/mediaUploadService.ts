import { env } from "@/core/config/env";
import { getAccessToken } from "@/core/api/interceptors";
import { COURSE_ENDPOINTS } from "../api/endpoints";
import { toLesson } from "../adapters/mediaAdapter";
import { ACCEPTED_MEDIA, MAX_MEDIA_SIZE } from "../model/constants";
import type { Lesson, LessonType } from "../model/types";
import type { RawLesson } from "../api/queries";

// Ket qua kiem tra tep truoc khi tai len
export type MediaCheck = { ok: true } | { ok: false; message: string };

// Ham nhan tien do tai len (0-100)
export type ProgressHandler = (percent: number) => void;

// Tang dich vu tai media (video/slide/tai lieu) cho bai hoc.
// Dung XMLHttpRequest thay vi fetch de theo doi duoc tien do tai len.
export const mediaUploadService = {
  // Kiem tra dinh dang va dung luong tep theo loai bai hoc
  validate(file: File, type: LessonType): MediaCheck {
    const accepted = ACCEPTED_MEDIA[type];
    const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
    if (!accepted.includes(extension)) {
      return { ok: false, message: `Định dạng tệp không hợp lệ (chấp nhận: ${accepted})` };
    }
    if (file.size > MAX_MEDIA_SIZE[type]) {
      const maxMb = Math.round(MAX_MEDIA_SIZE[type] / (1024 * 1024));
      return { ok: false, message: `Kích thước tệp vượt quá ${maxMb} MB` };
    }
    return { ok: true };
  },

  // Tai tep len, goi onProgress trong qua trinh tai.
  // Tra ve bai hoc da tao sau khi tai xong.
  upload(
    courseId: string,
    file: File,
    type: LessonType,
    title: string,
    onProgress?: ProgressHandler
  ): Promise<Lesson> {
    const check = this.validate(file, type);
    if (!check.ok) {
      return Promise.reject(new Error(check.message));
    }

    return new Promise<Lesson>((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", type);
      formData.append("title", title);

      const xhr = new XMLHttpRequest();
      const url = `${env.apiBaseUrl}${COURSE_ENDPOINTS.uploadMedia(courseId)}`;
      xhr.open("POST", url);

      // Gan header xac thuc neu co token
      const token = getAccessToken();
      if (token) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }

      // Theo doi tien do tai len
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          onProgress(Math.round((event.loaded / event.total) * 100));
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const raw = JSON.parse(xhr.responseText) as RawLesson;
          resolve(toLesson(raw));
        } else {
          reject(new Error("Tải tệp lên thất bại"));
        }
      };

      xhr.onerror = () => reject(new Error("Lỗi mạng khi tải tệp lên"));
      xhr.send(formData);
    });
  },
};