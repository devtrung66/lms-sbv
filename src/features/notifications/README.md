# Module: notifications

Thong bao trong he thong (badge chuong + dropdown + trang danh sach).

## Chuc nang
- Badge chuong tren thanh tieu de (so chua doc, tu lam moi moi 60 giay).
- Dropdown thong bao gan day, danh dau da doc.
- Trang danh sach day du tat ca thong bao.
- 4 loai: khoa hoc moi, ket qua kiem tra, he thong, sap den han.

## Cau truc
- `model/` types (AppNotification), hang so (nhan + icon + mau theo loai).
- `api/` endpoints, queries, mutations (mark read).
- `adapters/` notificationAdapter.
- `services/` notificationService.
- `state/` store (dropdown chuong).
- `hooks/` useNotifications (poll badge 60s), useNotificationMutation.
- `lib/` filterUnread, countUnread, formatBadgeCount.
- `ui/` NotificationBell, NotificationCard / NotificationDropdown, NotificationList /
  NotificationsPage.

## Tich hop voi Topbar
- NotificationBell + NotificationDropdown duoc dat trong Topbar (core layout)
  de thay the badge chuong mau o buoc dau.

## Public API
Import qua `@/features/notifications`: hooks, NotificationBell,
NotificationDropdown, types.