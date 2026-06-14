import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useEffect, type ReactElement } from "react";
import { AppRouter } from "./router";
import { authActions, useAuthStore } from "@/features/auth";

// Khoi tao QueryClient: cau hinh mac dinh cho toan bo read/write API
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
    },
  },
});

// Boc khoi phuc phien: kiem tra token va tai lai nguoi dung khi mo app.
// Hien man hinh cho trong khi dang khoi phuc de tranh nhay ve trang dang nhap.
function SessionBoundary({ children }: { children: ReactElement }): ReactElement {
  const initializing = useAuthStore((state) => state.initializing);

  // Khoi phuc phien mot lan khi mo app
  useEffect(() => {
    void authActions.restore();
  }, []);

  if (initializing) {
    return (
      <div className="flex h-screen items-center justify-center text-sm text-ink-muted">
        Đang tải hệ thống...
      </div>
    );
  }

  return children;
}

// Component goc: boc cac provider dung chung + khoi phuc phien + router.
export function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SessionBoundary>
          <AppRouter />
        </SessionBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
}