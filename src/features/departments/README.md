# Module: departments

Quan ly phong/ban cua don vi (khu vuc quan tri).

## Chuc nang
- CRUD phong/ban (ten, ma, truong phong).
- Thong ke so cong chuc + ty le hoan thanh khoa hoc theo phong.
- Bang thong ke dung lai o trang quan tri nguoi dung (anh 2).

## Cau truc
- `model/` types (Department, DepartmentStat), schema, hang so (nguong mau).
- `api/` endpoints, queries, mutations.
- `adapters/` departmentAdapter.
- `services/` departmentService.
- `state/` store (trang thai form), khong co selectors/actions rieng (don gian).
- `hooks/` useDepartmentList, useDepartmentStats, useDepartmentMutation.
- `lib/` completionColorClass, activeRatio.
- `ui/` DeptStatCard, DepartmentRow, DepartmentStatsTable /
  DepartmentTable, DepartmentFormModal / List.

## Public API
Import qua `@/features/departments`: hooks, departmentService,
DepartmentStatsTable, types.

## Luu y
- DepartmentStatsTable duoc module users import de hien thi bang
  "Thong ke theo phong/ban" o goc duoi trang quan tri nguoi dung.