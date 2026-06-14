// Cau hinh rieng cua module courses.
export const coursesConfig = {
  // So khoa hoc mac dinh moi trang
  defaultPageSize: 10,

  // Vai tro duoc phep quan ly khoa hoc
  allowedRoles: ["admin", "instructor"] as const,

  // Anh bia mac dinh khi khoa hoc chua co thumbnail
  defaultThumbnail: "/images/course-placeholder.png",

  // Co cho phep keo tha nhieu tep cung luc khi tai len hay khong
  allowMultipleUpload: true,
} as const;