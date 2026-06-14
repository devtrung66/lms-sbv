import { fetchDepartments, fetchDepartmentStats } from "../api/queries";
import {
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../api/mutations";
import { toDepartment, toDepartmentStat } from "../adapters/departmentAdapter";
import type { Department, DepartmentStat, DepartmentFormValues } from "../model/types";

// Tang dich vu nghiep vu phong/ban: ket noi API + adapter.
export const departmentService = {
  // Lay danh sach phong/ban
  async getList(): Promise<Department[]> {
    const raws = await fetchDepartments();
    return raws.map(toDepartment);
  },

  // Lay thong ke phong/ban (cho bang o trang quan tri nguoi dung)
  async getStats(): Promise<DepartmentStat[]> {
    const raws = await fetchDepartmentStats();
    return raws.map(toDepartmentStat);
  },

  // Tao moi phong/ban
  async create(values: DepartmentFormValues): Promise<Department> {
    const raw = await createDepartment(values);
    return toDepartment(raw);
  },

  // Cap nhat phong/ban
  async update(id: string, values: DepartmentFormValues): Promise<Department> {
    const raw = await updateDepartment(id, values);
    return toDepartment(raw);
  },

  // Xoa phong/ban
  remove(id: string): Promise<void> {
    return deleteDepartment(id);
  },
};