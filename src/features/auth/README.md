# Module: auth

Xac thuc va quan ly phien dang nhap cho he thong dao tao truc tuyen.

## Chuc nang
- Dang nhap bang email cong vu (@sbv.gov.vn) + mat khau.
- Dang nhap bang Google Workspace (tuy chon, bat khi co Google Client ID).
- Khoi phuc phien khi mo lai trang (doc token, goi /auth/me).
- Dang xuat, vo hieu refresh token o backend.

## Cau truc
- `model/` types, schema zod, hang so + thong bao loi (tieng Viet).
- `api/` endpoints, read (queries), write (mutations) khop identity-service.
- `adapters/` mapping snake_case (backend) <-> camelCase (model noi bo).
- `services/` tokenService, sessionService, authService (dieu phoi nghiep vu).
- `state/` store Zustand + selectors + actions.
- `hooks/` useLogin, useSession, useGoogleAuth (cau noi UI).
- `ui/` LoginForm, PasswordInput, GoogleWorkspaceButton, LoginCard, LoginPage.
- `router.tsx` dang ky route `/login`.

## Public API
Import qua `@/features/auth`:
- Hooks: `useLogin`, `useSession`, `useGoogleAuth`.
- State: `useAuthStore`, `useIsAuthenticated`, `useCurrentRole`, `useIsAdminArea`.
- Types: `AuthUser`, `Session`, `LoginCredentials`, `UserRole`.

## Luu y
- UI khong goi `apiClient` hay `localStorage` truc tiep, chi goi qua service.
- Nguong dang nhap Google bat/tat dua tren bien moi truong `VITE_GOOGLE_CLIENT_ID`.