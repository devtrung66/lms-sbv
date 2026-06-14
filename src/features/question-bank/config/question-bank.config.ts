// Cau hinh rieng cua module question-bank.
export const questionBankConfig = {
  // So cau hoi mac dinh moi trang
  defaultPageSize: 10,

  // Vai tro duoc phep quan ly ngan hang cau hoi
  allowedRoles: ["admin", "instructor"] as const,

  // Diem mac dinh cho mot cau hoi moi
  defaultPoints: 1,
} as const;