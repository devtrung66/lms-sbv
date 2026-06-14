// Cac ham xu ly ngay gio, hien thi theo dinh dang Viet Nam.
// Dung Intl thay vi thu vien ngoai de giu bundle gon.

// Dinh dang ngay: Date | ISO string -> "dd/MM/yyyy"
export function formatDate(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

// Dinh dang ngay gio: -> "dd/MM/yyyy HH:mm"
export function formatDateTime(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

// Khoang cach tuong doi so voi hien tai: "3 ngay truoc", "vua xong"
export function formatRelative(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60_000);

  if (diffMinutes < 1) return "vừa xong";
  if (diffMinutes < 60) return `${diffMinutes} phút trước`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} giờ trước`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays} ngày trước`;

  return formatDate(date);
}