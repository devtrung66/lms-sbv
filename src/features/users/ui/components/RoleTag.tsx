import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";
import { ROLE_LABELS } from "../../model/constants";
import type { UserRole } from "@/app/router/guards";

interface RoleTagProps {
  role: UserRole;
}

// Mau nen theo tung vai tro
const ROLE_COLORS: Record<UserRole, string> = {
  admin: "bg-purple-50 text-purple-700",
  instructor: "bg-blue-50 text-blue-700",
  manager: "bg-cyan-50 text-cyan-700",
  learner: "bg-slate-100 text-slate-600",
};

// The hien thi vai tro nguoi dung.
export function RoleTag({ role }: RoleTagProps): ReactElement {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        ROLE_COLORS[role]
      )}
    >
      {ROLE_LABELS[role]}
    </span>
  );
}