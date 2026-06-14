import { env } from "@/core/config/env";
import { applyAuthHeader, handleResponseError } from "./interceptors";
import { USE_MOCK, getMockData } from "./mockData";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  retries?: number;
  signal?: AbortSignal;
}

export class ApiError extends Error {
  constructor(public status: number, message: string, public payload?: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

function withTimeout(ms: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

function isFormData(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

async function request<TResponse>(path: string, options: RequestOptions = {}): Promise<TResponse> {
  const { method = "GET", body, retries = 1, signal } = options;

  // Che do demo: tra du lieu gia, khong goi backend
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 150));
    return getMockData(path, method) as TResponse;
  }

  const url = `${env.apiBaseUrl}${path}`;
  const sendingFormData = isFormData(body);
  const baseHeaders: Record<string, string> = sendingFormData ? {} : { "Content-Type": "application/json" };
  const headers = applyAuthHeader(baseHeaders);

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : sendingFormData ? (body as FormData) : JSON.stringify(body),
        signal: signal ?? withTimeout(env.apiTimeout),
      });

      if (!response.ok) {
        await handleResponseError(response);
        const payload = await safeJson(response);
        throw new ApiError(response.status, response.statusText, payload);
      }

      if (response.status === 204) {
        return undefined as TResponse;
      }

      return (await response.json()) as TResponse;
    } catch (error) {
      lastError = error;
      if (error instanceof ApiError) {
        throw error;
      }
    }
  }

  throw lastError;
}

async function safeJson(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return undefined;
  }
}

export const apiClient = {
  get: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "POST", body }),
  put: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "PUT", body }),
  patch: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "PATCH", body }),
  delete: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: "DELETE" }),
};