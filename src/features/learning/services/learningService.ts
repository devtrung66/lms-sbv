import { fetchMyCourses, fetchCourseRoom } from "../api/queries";
import { syncLessonProgress } from "../api/mutations";
import { toEnrolledCourse, toCourseRoom } from "../adapters/learningAdapter";
import { progressUpdateSchema, type ProgressUpdate } from "../model/schemas";
import type { EnrolledCourse, CourseRoom } from "../model/types";

// Tang dich vu hoc tap: lay khoa cua hoc vien + phong hoc + dong bo tien do.
export const learningService = {
  // Lay danh sach khoa hoc cua hoc vien hien tai
  async getMyCourses(): Promise<EnrolledCourse[]> {
    const raws = await fetchMyCourses();
    return raws.map(toEnrolledCourse);
  },

  // Lay du lieu phong hoc cua mot khoa
  async getCourseRoom(courseId: string): Promise<CourseRoom> {
    const raw = await fetchCourseRoom(courseId);
    return toCourseRoom(raw);
  },

  // Dong bo tien do hoc mot bai (kiem tra hop le truoc khi gui)
  async syncProgress(courseId: string, update: ProgressUpdate): Promise<void> {
    const parsed = progressUpdateSchema.parse(update);
    return syncLessonProgress(courseId, parsed);
  },
};