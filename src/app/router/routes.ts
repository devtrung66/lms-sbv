// Khai bao tap trung duong dan cua toan he thong.
export const ROUTES = {
  // Cong khai
  login: "/login",

  // Khu vuc hoc vien
  home: "/",
  myCourses: "/khoa-hoc-cua-toi",
  courseRoom: "/khoa-hoc-cua-toi/:courseId",
  progress: "/tien-do-hoc-tap",
  quizResult: "/ket-qua-kiem-tra",
  quizTake: "/kiem-tra/:quizId",
  notifications: "/thong-bao",
  certificates: "/chung-chi",

  // Khu vuc quan tri
  adminDashboard: "/quan-tri/tong-quan",
  users: "/quan-tri/nguoi-dung",
  userDetail: "/quan-tri/nguoi-dung/:userId",
  departments: "/quan-tri/phong-ban",
  roles: "/quan-tri/phan-quyen",
  courses: "/quan-tri/khoa-hoc",
  courseCreate: "/quan-tri/khoa-hoc/tao-moi",
  courseForm: "/quan-tri/khoa-hoc/:courseId",
  questionBank: "/quan-tri/ngan-hang-cau-hoi",
  reports: "/quan-tri/bao-cao",
  settings: "/quan-tri/cai-dat",

  // Trang loi
  notFound: "*",
} as const;

// Helper thay tham so dong trong duong dan
export function buildPath(
  pattern: string,
  params: Record<string, string | number>
): string {
  let result = pattern;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`:${key}`, String(value));
  }
  return result;
}