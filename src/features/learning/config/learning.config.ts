// Cau hinh rieng cua module learning.
export const learningConfig = {
  // Cho phep tua video qua phan chua xem hay khong
  // (mot so quy che dao tao bat buoc xem het, khong cho tua)
  allowSeekAhead: true,

  // Tu dong chuyen sang bai tiep theo khi hoc xong bai hien tai
  autoPlayNext: false,

  // So khoa hoc gan day hien thi tren trang chu hoc vien
  recentCoursesLimit: 3,
} as const;