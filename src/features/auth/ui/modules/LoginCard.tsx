import type { ReactElement } from "react";
import { APP_NAME, ORG_NAME } from "@/core/lib/constants";
import { authConfig } from "../../config/auth.config";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";
import { LoginForm } from "../components/LoginForm";
import { GoogleWorkspaceButton } from "../components/GoogleWorkspaceButton";

// Logo don vi (lay tu public/logo.svg).
function Logo(): ReactElement {
  return (
    <img src="/logo.svg" alt="Logo" className="h-20 w-20 object-contain" />
  );
}

// The dang nhap o giua man hinh: logo + ten don vi + form + Google.
export function LoginCard(): ReactElement {
  const { signInWithToken } = useGoogleAuth();

  function handleGoogleLogin(): void {
    void signInWithToken;
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-card sm:p-10">
      {/* Thuong hieu don vi */}
      <div className="flex flex-col items-center text-center">
        <Logo />
        <h1 className="mt-4 text-xl font-bold uppercase leading-snug text-brand-700">
          {ORG_NAME}
        </h1>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
          {APP_NAME}
        </p>
        <div className="mt-3 h-1 w-12 rounded-full bg-brand-500" />
      </div>

      {/* Form dang nhap */}
      <div className="mt-8">
        <LoginForm />
      </div>

      {authConfig.enableGoogleLogin && (
        <>
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-ink-muted">hoặc</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <GoogleWorkspaceButton onClick={handleGoogleLogin} />
        </>
      )}
    </div>
  );
}