import type { SettingSection } from "./types";

// Cac nhom cau hinh hien thi tren trang cai dat (tieng Viet co dau)
export const SETTING_SECTIONS: SettingSection[] = [
  {
    id: "general",
    title: "Thông tin chung",
    description: "Tên hệ thống, đơn vị chủ quản, email hỗ trợ",
  },
  {
    id: "quiz",
    title: "Bài kiểm tra",
    description: "Ngưỡng điểm đạt, số lần làm lại",
  },
  {
    id: "auth",
    title: "Đăng nhập",
    description: "Phương thức đăng nhập, khóa tài khoản tự động",
  },
  {
    id: "notification",
    title: "Thông báo",
    description: "Cấu hình thông báo qua email",
  },
];

// Gia tri nguong diem dat hop le (phan tram)
export const MIN_PASS_THRESHOLD = 50;
export const MAX_PASS_THRESHOLD = 100;