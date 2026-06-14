import { fetchSettings } from "../api/queries";
import { updateSettings } from "../api/mutations";
import { toSystemSettings } from "../adapters/settingsAdapter";
import type { SystemSettings, SettingsFormValues } from "../model/types";

// Tang dich vu cau hinh he thong: ket noi API + adapter.
export const settingsService = {
  // Lay cau hinh hien tai
  async get(): Promise<SystemSettings> {
    const raw = await fetchSettings();
    return toSystemSettings(raw);
  },

  // Cap nhat cau hinh (tung phan)
  async update(values: SettingsFormValues): Promise<SystemSettings> {
    const raw = await updateSettings(values);
    return toSystemSettings(raw);
  },
};