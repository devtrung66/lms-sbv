# Module: reports

Bao cao thong ke cho khu vuc quan tri.

## Chuc nang
- The so lieu tong hop (kem phan tram thay doi so ky truoc).
- Bao cao theo phong/ban (so cong chuc, khoa hoan thanh, diem TB, ty le).
- Bieu do phan bo (vd phan bo vai tro - anh 2).
- Xuat bao cao ra CSV (co BOM cho Excel doc dung tieng Viet).

## Cau truc
- `model/` types, schema, hang so (mau bieu do, dinh dang xuat).
- `api/` endpoints, queries.
- `adapters/` reportAdapter.
- `services/` reportService, exportService (xuat CSV phia client).
- `state/` store (bo loc).
- `hooks/` useReportData (gom 3 query), useExport.
- `lib/` formatChange, changeColorClass, totalDistribution.
- `ui/` ReportCard, ChartLegend, ExportButton / ReportFilters,
  DepartmentStatsTable, RoleDistributionChart / Overview.

## Luu y
- exportService them BOM (\uFEFF) vao CSV de Excel mo dung tieng Viet co dau.
- RoleDistributionChart va ReportCard duoc dashboard quan tri import lai.

## Public API
Import qua `@/features/reports`: hooks, reportService, RoleDistributionChart,
ReportCard, types.