import { fetchLessons } from "../api/queries";
import { toLessonList } from "../adapters/mediaAdapter";
import type { Lesson } from "../model/types";

// Tang dich vu quan ly bai hoc trong khoa.
export const lessonService = {
  // Lay danh sach bai hoc cua mot khoa, da sap xep theo thu tu
  async getByCourse(courseId: string): Promise<Lesson[]> {
    const raws = await fetchLessons(courseId);
    return toLessonList(raws);
  },
};