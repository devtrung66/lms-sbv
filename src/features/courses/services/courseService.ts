import { fetchCourseList, fetchCourseDetail } from "../api/queries";
import {
  createCourse,
  updateCourse,
  deleteCourse,
  publishCourse,
} from "../api/mutations";
import { toCourse, toCourseList } from "../adapters/courseAdapter";
import type { Paginated } from "@/core/model/common";
import type { Course, CourseFilters, CourseFormValues } from "../model/types";

// Tang dich vu nghiep vu khoa hoc: ket noi API + adapter.
export const courseService = {
  // Lay danh sach khoa hoc theo bo loc
  async getList(filters: CourseFilters): Promise<Paginated<Course>> {
    const raw = await fetchCourseList(filters);
    return toCourseList(raw);
  },

  // Lay chi tiet khoa hoc
  async getDetail(id: string): Promise<Course> {
    const raw = await fetchCourseDetail(id);
    return toCourse(raw);
  },

  // Tao moi khoa hoc
  async create(values: CourseFormValues): Promise<Course> {
    const raw = await createCourse(values);
    return toCourse(raw);
  },

  // Cap nhat khoa hoc
  async update(id: string, values: CourseFormValues): Promise<Course> {
    const raw = await updateCourse(id, values);
    return toCourse(raw);
  },

  // Xoa khoa hoc
  remove(id: string): Promise<void> {
    return deleteCourse(id);
  },

  // Xuat ban khoa hoc
  async publish(id: string): Promise<Course> {
    const raw = await publishCourse(id);
    return toCourse(raw);
  },
};