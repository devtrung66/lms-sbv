// Cau hinh rieng cua module roles.
export const rolesConfig = {
  // Vai tro duoc phep quan ly phan quyen
  allowedRoles: ["admin"] as const,

  // Cac ma vai tro he thong khong duoc xoa
  systemRoleCodes: ["admin", "instructor", "manager", "learner"] as const,
} as const;