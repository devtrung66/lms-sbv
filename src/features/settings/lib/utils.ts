import type { SystemSettings, SettingsFormValues } from "../model/types";

// Cac tien ich nho rieng cho module settings.

// Tinh cac truong da thay doi giua cau hinh goc va form (de chi gui phan doi).
export function getChangedFields(
  original: SystemSettings,
  current: SettingsFormValues
): SettingsFormValues {
  const changed: SettingsFormValues = {};
  (Object.keys(current) as (keyof SettingsFormValues)[]).forEach((key) => {
    if (current[key] !== undefined && current[key] !== original[key]) {
      // Gan dong de giu kieu (cac truong khac kieu nhau)
      (changed as Record<string, unknown>)[key] = current[key];
    }
  });
  return changed;
}

// Kiem tra form co thay doi gi so voi cau hinh goc khong
export function hasChanges(
  original: SystemSettings,
  current: SettingsFormValues
): boolean {
  return Object.keys(getChangedFields(original, current)).length > 0;
}