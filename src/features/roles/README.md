# Module: roles

Phan quyen theo vai tro (RBAC) cho khu vuc quan tri.

## Chuc nang
- CRUD vai tro (ma, ten, mo ta).
- Ma tran phan quyen: gan/bo quyen cho vai tro theo nhom.
- Vai tro he thong (admin/instructor/manager/learner) co dinh, khong sua/xoa.
- Co che ban nhap: chinh nhieu quyen roi luu mot lan.

## Cau truc
- `model/` types (Role, Permission), schema, hang so (PERMISSION_CATALOG).
- `api/` endpoints, queries, mutations.
- `adapters/` roleAdapter.
- `services/` roleService, permissionService (fallback danh muc mac dinh).
- `state/` store (vai tro chon + ban nhap quyen), selectors, actions.
- `hooks/` useRoleList, useRoleMutation, usePermissionMatrix (ban nhap + luu).
- `lib/` countPermissions, canDeleteRole.
- `ui/` PermissionCheckbox, RoleRow / PermissionMatrix, RoleTable, RoleFormModal / List.

## Luu y
- RBAC chi tiet o day khac UserRole (4 vai tro cung) dung cho route guard.
- Khi tich hop, role.code se map ve UserRole de guard hoat dong.
- permissionService fallback ve PERMISSION_CATALOG neu backend chua co endpoint.

## Public API
Import qua `@/features/roles`: hooks, services, types.