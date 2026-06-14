import { useState, type ReactElement } from "react";
import { Save } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { ROLE_OPTIONS } from "../../model/constants";
import { validateUserForm } from "../../lib/validators";
import { useUserMutation } from "../../hooks/useUserMutation";
import type { UserFormValues } from "../../model/types";

// Gia tri form rong ban dau
const EMPTY_FORM: UserFormValues = {
  staffCode: "",
  fullName: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  role: "learner",
};

// Trang them/sua cong chuc.
export function UserFormPage(): ReactElement {
  const [values, setValues] = useState<UserFormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof UserFormValues, string>>>({});
  const { create } = useUserMutation();

  // Cap nhat mot truong cua form
  function setField<K extends keyof UserFormValues>(key: K, value: UserFormValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  // Xu ly luu form
  async function handleSubmit(): Promise<void> {
    const result = validateUserForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    await create.mutateAsync(values);
  }

  return (
    <div>
      <PageHeader
        title="Thêm công chức"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị người dùng", to: ROUTES.users },
          { label: "Thêm mới" },
        ]}
      />

      <div className="max-w-2xl rounded-card border border-slate-200 bg-white p-6 shadow-card">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Ma cong chuc */}
          <Field label="Mã công chức" error={errors.staffCode}>
            <input
              value={values.staffCode}
              onChange={(e) => setField("staffCode", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* Ho va ten */}
          <Field label="Họ và tên" error={errors.fullName}>
            <input
              value={values.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* Email */}
          <Field label="Email công vụ" error={errors.email}>
            <input
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* So dien thoai */}
          <Field label="Số điện thoại" error={errors.phone}>
            <input
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* Phong/ban */}
          <Field label="Phòng / Ban" error={errors.department}>
            <input
              value={values.department}
              onChange={(e) => setField("department", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* Chuc vu */}
          <Field label="Chức vụ" error={errors.position}>
            <input
              value={values.position}
              onChange={(e) => setField("position", e.target.value)}
              className="form-input"
            />
          </Field>

          {/* Vai tro */}
          <Field label="Vai trò" error={errors.role}>
            <select
              value={values.role}
              onChange={(e) => setField("role", e.target.value as UserFormValues["role"])}
              className="form-input"
            >
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={create.isPending}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Save size={16} /> {create.isPending ? "Đang lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Khoi bao boc mot truong form: nhan + noi dung + loi
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactElement;
}): ReactElement {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  );
}