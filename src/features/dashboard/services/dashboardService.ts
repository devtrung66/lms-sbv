import { fetchLearnerDashboard, fetchAdminDashboard } from "../api/queries";
import { toLearnerDashboard, toAdminDashboard } from "../adapters/dashboardAdapter";
import type { LearnerDashboard, AdminDashboard } from "../model/types";

// Tang dich vu dashboard: ket noi API + adapter.
export const dashboardService = {
  // Lay du lieu dashboard hoc vien (anh 3)
  async getLearner(): Promise<LearnerDashboard> {
    const raw = await fetchLearnerDashboard();
    return toLearnerDashboard(raw);
  },

  // Lay du lieu dashboard quan tri (anh 2)
  async getAdmin(): Promise<AdminDashboard> {
    const raw = await fetchAdminDashboard();
    return toAdminDashboard(raw);
  },
};