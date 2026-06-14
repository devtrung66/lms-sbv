// Tap trung doc bien moi truong tai mot noi duy nhat,
// co ep kieu va gia tri mac dinh de tranh undefined rai rac trong code.

interface AppEnv {
  apiBaseUrl: string;
  apiTimeout: number;
  googleClientId: string;
  passThreshold: number;
}

// Doc tung bien, chuyen sang kieu phu hop
export const env: AppEnv = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5002",
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "",
  passThreshold: Number(import.meta.env.VITE_PASS_THRESHOLD ?? 80),
};