# Module: settings

Cau hinh he thong (khu vuc quan tri).

## Chuc nang
- Thong tin chung: ten he thong, don vi, email ho tro.
- Bai kiem tra: nguong diem dat (mac dinh 80%), so lan lam lai.
- Dang nhap: bat/tat Google Workspace, tu dong khoa tai khoan.
- Thong bao: bat/tat thong bao qua email.

## Cau truc
- `model/` types (SystemSettings), schema, hang so (4 nhom cau hinh).
- `api/` endpoints, queries, mutations (cap nhat tung phan).
- `adapters/` settingsAdapter.
- `services/` settingsService.
- `state/` store (nhom cau hinh dang xem).
- `hooks/` useSettings, useSettingsMutation (cap nhat cache ngay sau luu).
- `lib/` getChangedFields, hasChanges (chi gui phan thay doi).
- `ui/` ToggleField, SettingRow, SettingSection / SettingsForm, SettingsTabs / Settings.

## Luu y
- passThreshold o day la nguon cau hinh nguong dat (admin chinh duoc),
  uu tien hon gia tri mac dinh trong bien moi truong.
- Chi gui cac truong thay doi khi luu (partial update).

## Public API
Import qua `@/features/settings`: hooks, settingsService, types.