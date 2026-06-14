import type { ReactElement } from "react";
import { ORG_NAME } from "@/core/lib/constants";
import { LoginCard } from "../modules/LoginCard";

// Trang dang nhap toan man hinh: nen xanh nhat co van song nhe,
// the dang nhap can giua, footer ban quyen phia duoi.
export function LoginPage(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 px-4">
      {/* The dang nhap */}
      <LoginCard />

      {/* Footer ban quyen */}
      <footer className="mt-8 text-center text-xs text-ink-muted">
        © {currentYear} {ORG_NAME}
      </footer>
    </div>
  );
}