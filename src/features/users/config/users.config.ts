// Cau hinh rieng cua module users.
export const usersConfig = {
  // So dong mac dinh moi trang trong bang danh sach
  defaultPageSize: 10,

  // Vai tro duoc phep truy cap trang quan tri nguoi dung
  allowedRoles: ["admin", "manager"] as const,

  // Duong dan tai file Excel mau de nhap cong chuc
  importTemplateUrl: "/templates/mau-nhap-cong-chuc.xlsx",

  // So cot toi thieu file Excel can co khi nhap
  requiredColumns: [
    "Mã công chức",
    "Họ và tên",
    "Email công vụ",
    "Phòng/Ban",
    "Chức vụ",
    "Vai trò",
  ],
} as const;