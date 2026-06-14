import { useState, type ReactElement } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/core/lib/utils";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  // Thong bao loi hien thi duoi o nhap (tieng Viet co dau)
  error?: string;
}

// O nhap mat khau co nut an/hien, icon khoa ben trai.
// Tach rieng vi co trang thai hien thi noi bo (show/hide).
export function PasswordInput({
  value,
  onChange,
  placeholder = "Mật khẩu",
  error,
}: PasswordInputProps): ReactElement {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl border bg-white px-4 py-3 transition-colors",
          error ? "border-danger" : "border-slate-200 focus-within:border-brand-500"
        )}
      >
        <Lock size={18} className="shrink-0 text-slate-400" />
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          className="shrink-0 text-slate-400 hover:text-ink-muted"
          aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}