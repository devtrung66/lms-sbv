# Ghi chu ky thuat con lai (sau khi sinh khung)

Cac viec nen hoan thien khi noi backend that:

## Bao mat / chong gian lan
- Quiz: luu startedAt xuong backend khi bat dau lam bai (hien giu o store,
  reload se mat). Backend cham diem chinh thuc, client khong co dap an dung.
- Settings.passThreshold nen duoc quiz doc lai (hien quiz doc tu env).

## Tich hop con lai
- Quiz dat (passed) -> goi API cap nhat trang thai khoa hoc sang "completed".
- QuestionFormModal khi sua (editingId) can nap du lieu cau hoi cu vao form.
- CourseEditor khi sua can nap khoa hoc cu (da co prop course, can truyen vao).
- Google Workspace: tich hop Google Identity Services that trong LoginCard.
- Quoc huy: thay NationalEmblem placeholder bang anh chinh thuc tu CDN.

## Don dep kien truc (khong gap)
- Mot so import sau (vd @/features/.../lib/utils, /model/constants) cho cac
  helper thuan - co the giu hoac dua qua public API tuy quy uoc nhom.
- Topbar: gop 2 dong import tu @/features/notifications thanh 1.
- Progress sync: them listener beforeunload + navigator.sendBeacon de flush
  tien do khi dong tab dot ngot.

## Hieu suat (tuy chon)
- Notifications: thay polling 60s bang WebSocket/SSE neu can realtime.
- Lazy-load cac trang quan tri bang React.lazy de giam bundle ban dau.