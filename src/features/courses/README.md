# Module: courses

Quan ly khoa hoc va tai len noi dung (video, trinh chieu, tai lieu).

## Chuc nang
- CRUD khoa hoc, xuat ban (draft -> published).
- Tai len media cho bai hoc, co theo doi tien do (XHR upload progress).
- Quan ly danh sach bai hoc theo thu tu.
- Danh dau khoa hoc co bai kiem tra cuoi khoa (lien ket module quiz).

## Cau truc
- `model/` types (Course, Lesson, UploadProgress), schema, hang so (dinh dang/dung luong media).
- `api/` endpoints, queries, mutations (gom uploadMedia bang FormData).
- `adapters/` courseAdapter, mediaAdapter (snake_case <-> camelCase).
- `services/` courseService, lessonService, mediaUploadService (XHR co progress).
- `state/` store (filter + selected + tien do upload), selectors, actions.
- `hooks/` useCourseList, useCourseDetail, useCourseMutation, useMediaUpload.
- `ui/` CourseCard, LessonItem, UploadDropzone, MediaThumb / CourseTable, CourseEditor,
  LessonManager, UploadPanel / List, Detail, Form.
- `router.tsx` cac route khu vuc quan tri khoa hoc.

## Luu y
- `mediaUploadService` dung XMLHttpRequest (khong qua apiClient) de lay duoc
  su kien tien do tai len. Khi chuyen sang upload thang R2 bang presigned URL,
  chi can doi URL dich trong service nay.
- Gioi han: video 500 MB, trinh chieu/tai lieu 50 MB.

## Public API
Import qua `@/features/courses`: hooks, courseService, lessonService, types.