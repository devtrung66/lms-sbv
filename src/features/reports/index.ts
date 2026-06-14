// API cong khai cua module reports.
export { useReportData } from "./hooks/useReportData";
export { useExport } from "./hooks/useExport";
export { reportService } from "./services/reportService";

// Thanh phan UI dung lai o dashboard quan tri
export { RoleDistributionChart } from "./ui/modules/RoleDistributionChart";
export { ReportCard } from "./ui/components/ReportCard";

export type {
  ReportCardData,
  DepartmentReportRow,
  DistributionSlice,
  ReportType,
} from "./model/types";