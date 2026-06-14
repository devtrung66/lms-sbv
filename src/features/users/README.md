# Module: users

Quan tri cong chuc (anh 2): danh sach, chi tiet, them/sua, nhap Excel.

## Chuc nang
- Danh sach cong chuc co loc (phong/ban, vai tro, trang thai) + tim kiem.
- Panel chi tiet ben phai.
- Them/sua cong chuc, khoa/mo khoa tai khoan.
- Nhap danh sach tu file Excel.
- The thong ke tong quan + bang thong ke theo phong/ban.

## Cau truc
- `model/` types, schema, hang so (nhan trang thai/vai tro).
- `api/` endpoints, queries, mutations (gom import Excel bang FormData).
- `adapters/` userAdapter.
- `services/` userService, importService (kiem tra file).
- `state/` store (filter + user dang chon), selectors, actions.
- `hooks/` useUserList, useUserDetail, useUserMutation, useImportExcel.
- `ui/` StatCard, UserRow, StatusBadge, RoleTag / UserTable, UserDetailPanel,
  ImportExcelModal, UserFilters / List, Detail, Form.

## Public API
Import qua `@/features/users`: hooks, userService, types.