// Cac tien ich nho rieng cho module quiz.

// Dinh dang thoi gian dem nguoc tu so giay: 125 -> "02:05"
export function formatCountdown(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds)) return "∞";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
}

// Tinh phan tram tien do lam bai (so cau da tra loi / tong)
export function attemptProgress(answered: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((answered / total) * 100);
}

// Mau hien thi diem theo nguong dat: dat thi xanh, khong dat thi do
export function scoreColorClass(score: number, threshold: number): string {
  return score >= threshold ? "text-green-600" : "text-red-600";
}