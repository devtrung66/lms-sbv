import { useState, useEffect, type ReactElement } from "react";
import { Save } from "lucide-react";
import { settingsFormSchema } from "../../model/schemas";
import { hasChanges, getChangedFields } from "../../lib/utils";
import { useSettingsMutation } from "../../hooks/useSettingsMutation";
import type { SystemSettings, SettingsFormValues } from "../../model/types";
import { SettingSection } from "../components/SettingSection";
import { SettingRow } from "../components/SettingRow";
import { ToggleField } from "../components/ToggleField";

interface SettingsFormProps {
  settings: SystemSettings;
}

// Form cau hinh he thong day du, chia theo nhom.
export function SettingsForm({ settings }: SettingsFormProps): ReactElement {
  const { save, isSaving } = useSettingsMutation();
  const [values, setValues] = useState<SettingsFormValues>(settings);
  const [error, setError] = useState<string | null>(null);

  // Dong bo lai form khi cau hinh goc thay doi
  useEffect(() => {
    setValues(settings);
  }, [settings]);

  // Cap nhat mot truong
  function setField<K extends keyof SettingsFormValues>(
    key: K,
    value: SettingsFormValues[K]
  ): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  // Luu (chi gui phan thay doi)
  async function handleSave(): Promise<void> {
    const result = settingsFormSchema.safeParse(values);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Dữ liệu không hợp lệ");
      return;
    }
    setError(null);
    const changed = getChangedFields(settings, values);
    await save(changed);
  }

  const dirty = hasChanges(settings, values);

  return (
    <div className="space-y-6">
      {/* Nhom: thong tin chung */}
      <SettingSection title="Thông tin chung" description="Tên hệ thống, đơn vị chủ quản, email hỗ trợ">
        <SettingRow label="Tên hệ thống">
          <input
            value={values.systemName ?? ""}
            onChange={(e) => setField("systemName", e.target.value)}
            className="form-input"
          />
        </SettingRow>
        <SettingRow label="Đơn vị chủ quản">
          <input
            value={values.organizationName ?? ""}
            onChange={(e) => setField("organizationName", e.target.value)}
            className="form-input"
          />
        </SettingRow>
        <SettingRow label="Email hỗ trợ">
          <input
            type="email"
            value={values.supportEmail ?? ""}
            onChange={(e) => setField("supportEmail", e.target.value)}
            className="form-input"
          />
        </SettingRow>
      </SettingSection>

      {/* Nhom: bai kiem tra */}
      <SettingSection title="Bài kiểm tra" description="Ngưỡng điểm đạt, số lần làm lại">
        <SettingRow label="Ngưỡng điểm đạt (%)" description="Học viên cần đạt để qua bài kiểm tra">
          <input
            type="number"
            min={50}
            max={100}
            value={values.passThreshold ?? 80}
            onChange={(e) => setField("passThreshold", Number(e.target.value))}
            className="form-input"
          />
        </SettingRow>
        <SettingRow label="Số lần làm lại tối đa">
          <input
            type="number"
            min={1}
            value={values.defaultMaxAttempts ?? 3}
            onChange={(e) => setField("defaultMaxAttempts", Number(e.target.value))}
            className="form-input"
          />
        </SettingRow>
      </SettingSection>

      {/* Nhom: dang nhap */}
      <SettingSection title="Đăng nhập" description="Phương thức đăng nhập, khóa tài khoản tự động">
        <ToggleField
          label="Cho phép đăng nhập bằng Google Workspace"
          checked={values.enableGoogleLogin ?? false}
          onChange={(v) => setField("enableGoogleLogin", v)}
        />
        <SettingRow
          label="Tự động khóa sau số ngày không hoạt động"
          description="Đặt 0 để tắt tính năng này"
        >
          <input
            type="number"
            min={0}
            value={values.autoLockInactiveDays ?? 0}
            onChange={(e) => setField("autoLockInactiveDays", Number(e.target.value))}
            className="form-input"
          />
        </SettingRow>
      </SettingSection>

      {/* Nhom: thong bao */}
      <SettingSection title="Thông báo" description="Cấu hình thông báo qua email">
        <ToggleField
          label="Gửi thông báo qua email"
          description="Thông báo khóa học mới, kết quả kiểm tra..."
          checked={values.enableEmailNotification ?? false}
          onChange={(v) => setField("enableEmailNotification", v)}
        />
      </SettingSection>

      {error && <p className="text-sm text-danger">{error}</p>}

      {/* Nut luu (chi sang khi co thay doi) */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          disabled={!dirty || isSaving}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50"
        >
          <Save size={16} /> {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
      </div>
    </div>
  );
}