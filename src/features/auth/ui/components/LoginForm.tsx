import { useState, type ReactElement } from "react";
import { User, LogIn } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { useLogin } from "../../hooks/useLogin";
import { validateLoginForm } from "../../lib/validators";
import type { LoginCredentials } from "../../model/types";
import { PasswordInput } from "./PasswordInput";

// Loi theo tung truong cua form
type FieldErrors = Partial<Record<keyof LoginCredentials, string>>;

// Form dang nhap bang email + mat khau.
// Kiem tra hop le phia client truoc khi goi hook dang nhap.
export function LoginForm(): ReactElement {
  const { submit, submitting, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Xu ly khi bam nut dang nhap
  async function handleSubmit(): Promise<void> {
    const values: LoginCredentials = { email: email.trim(), password };
    const result = validateLoginForm(values);
    if (!result.valid) {
      setFieldErrors(result.errors);
      return;
    }
    setFieldErrors({});
    await submit(values);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* O nhap email cong vu */}
      <div>
        <div
          className={cn(
            "flex items-center gap-3 rounded-xl border bg-white px-4 py-3 transition-colors",
            fieldErrors.email
              ? "border-danger"
              : "border-slate-200 focus-within:border-brand-500"
          )}
        >
          <User size={18} className="shrink-0 text-slate-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email công vụ (example@sbv.gov.vn)"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
          />
        </div>
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-danger">{fieldErrors.email}</p>
        )}
      </div>

      {/* O nhap mat khau */}
      <PasswordInput
        value={password}
        onChange={setPassword}
        error={fieldErrors.password}
      />

      {/* Loi tong tu may chu (vd sai tai khoan) */}
      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-danger">{error}</p>
      )}

      {/* Nut dang nhap */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-card transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        <LogIn size={18} />
        <span>{submitting ? "Đang đăng nhập..." : "Đăng nhập"}</span>
      </button>
    </div>
  );
}