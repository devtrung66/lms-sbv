import type { SystemSettings } from "../model/types";
import type { RawSystemSettings } from "../api/queries";

// Mapping cau hinh he thong: raw (snake_case) -> model (camelCase)
export function toSystemSettings(raw: RawSystemSettings): SystemSettings {
  return {
    systemName: raw.system_name,
    organizationName: raw.organization_name,
    supportEmail: raw.support_email,
    passThreshold: raw.pass_threshold,
    defaultMaxAttempts: raw.default_max_attempts,
    enableGoogleLogin: raw.enable_google_login,
    enableEmailNotification: raw.enable_email_notification,
    autoLockInactiveDays: raw.auto_lock_inactive_days,
  };
}