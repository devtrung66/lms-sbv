import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";
import { ENROLLMENT_LABELS, ENROLLMENT_COLORS } from "../../model/constants";
import type { EnrollmentStatus } from "../../model/types";

interface CompletionBadgeProps {
  status: EnrollmentStatus;
}

// Nhan trang thai hoc cua khoa (chua bat dau / dang hoc / hoan thanh).
export function CompletionBadge({ status }: CompletionBadgeProps): ReactElement {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        ENROLLMENT_COLORS[status]
      )}
    >
      {ENROLLMENT_LABELS[status]}
    </span>
  );
}