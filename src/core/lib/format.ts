// Cac ham dinh dang du lieu hien thi tren giao dien (theo chuan tieng Viet).

// Dinh dang so co dau phan cach hang nghin: 1234567 -> "1.234.567"
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value);
}

// Dinh dang phan tram: 0.875 -> "87,5%" (mac dinh 1 chu so thap phan)
export function formatPercent(value: number, fractionDigits = 1): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

// Dinh dang diem so tren thang 100: 87.5 -> "87,5/100"
export function formatScore(score: number, max = 100): string {
  const formatted = new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: 1,
  }).format(score);
  return `${formatted}/${max}`;
}

// Dinh dang thoi luong hoc tu so phut: 165 -> "2h 45m"
export function formatDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}