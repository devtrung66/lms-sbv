import { clsx, type ClassValue } from "clsx";

// Gop class Tailwind co dieu kien mot cach gon gang
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Rut gon van ban dai, them dau ba cham
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

// Tao do tre (dung trong debounce, test, hieu ung)
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Lay chu cai dau cua ho ten de hien thi avatar chu
export function getInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

// Kep gia tri trong khoang [min, max]
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}