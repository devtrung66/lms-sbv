import type { ReactElement } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { RESULT_MESSAGES } from "../../model/constants";

interface PassFailBannerProps {
  passed: boolean;
  // Nguong dat (phan tram) de hien thi nhac nho
  threshold: number;
}

// Bang thong bao ket qua dat / khong dat sau khi nop bai.
export function PassFailBanner({ passed, threshold }: PassFailBannerProps): ReactElement {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-card border p-5",
        passed
          ? "border-green-200 bg-green-50 text-green-700"
          : "border-red-200 bg-red-50 text-red-700"
      )}
    >
      {passed ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
      <div>
        <p className="font-semibold">
          {passed ? RESULT_MESSAGES.passed : RESULT_MESSAGES.failed}
        </p>
        <p className="text-sm opacity-80">
          Cần đạt tối thiểu {threshold}% để vượt qua bài kiểm tra.
        </p>
      </div>
    </div>
  );
}