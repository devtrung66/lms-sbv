import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";
import { STATUS_LABELS, STATUS_COLORS } from "../../model/constants";
import type { UserStatus } from "../../model/types";

interface StatusBadgeProps {
  status: UserStatus;
}

// Nhan trang thai tai khoan: mau va chu theo trang thai (anh 2).
export function StatusBadge({ status }: StatusBadgeProps): ReactElement {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        STATUS_COLORS[status]
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}