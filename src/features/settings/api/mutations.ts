import { apiClient } from "@/core/api/client";
import { SETTINGS_ENDPOINTS } from "./endpoints";
import type { RawSystemSettings } from "./queries";
import type { SettingsFormValues } from "../model/types";

// Chuyen du lieu form (camelCase) sang body backend (snake_case).
// Chi gui cac truong co gia tri (cho phep cap nhat tung phan).
function toRequestBody(values: SettingsFormValues): Record<string, unknown> {
  const body: Record<string, unknown> = {};
  if (values.systemName !== undefined) body.system_name = values.systemName;
  if (values.organizationName !== undefined) body.organization_name = values.organizationName;
  if (values.supportEmail !== undefined) body.support_email = values.supportEmail;
  if (values.passThreshold !== undefined) body.pass_threshold = values.passThreshold;
  if (values.defaultMaxAttempts !== undefined) body.default_max_attempts = values.defaultMaxAttempts;
  if (values.enableGoogleLogin !== undefined) body.enable_google_login = values.enableGoogleLogin;
  if (values.enableEmailNotification !== undefined)
    body.enable_email_notification = values.enableEmailNotification;
  if (values.autoLockInactiveDays !== undefined)
    body.auto_lock_inactive_days = values.autoLockInactiveDays;
  return body;
}

// Cap nhat cau hinh he thong
export function updateSettings(values: SettingsFormValues): Promise<RawSystemSettings> {
  return apiClient.put<RawSystemSettings>(SETTINGS_ENDPOINTS.update, toRequestBody(values));
}