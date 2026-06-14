import type { ReactElement } from "react";
import {
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Trophy,
  Users,
  UserCheck,
  UserX,
  Lock,
  Building2,
  Activity,
} from "lucide-react";
import { KPI_ICON_MAP } from "../../model/constants";

// Ban do ten icon (chuoi) -> component icon lucide.
// Tang logic chi giu ten icon, tang UI chiu trach nhiem render.
const ICON_COMPONENTS: Record<string, typeof BookOpen> = {
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Trophy,
  Users,
  UserCheck,
  UserX,
  Lock,
  Building2,
};

interface KpiIconProps {
  // Khoa KPI (vd "total_courses"), se tra cuu qua KPI_ICON_MAP
  kpiKey: string;
  size?: number;
  className?: string;
}

// Hien thi icon tuong ung voi mot khoa KPI.
export function KpiIcon({ kpiKey, size = 22, className }: KpiIconProps): ReactElement {
  const iconName = KPI_ICON_MAP[kpiKey] ?? "Activity";
  const IconComponent = ICON_COMPONENTS[iconName] ?? Activity;
  return <IconComponent size={size} className={className} />;
}