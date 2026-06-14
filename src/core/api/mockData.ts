// Du lieu gia de demo giao dien khi chua co backend.
export const USE_MOCK = true;

const slices = [
  { label: "Hoc vien", value: 210, percent: 75 },
  { label: "Truong phong", value: 32, percent: 11 },
  { label: "Giang vien", value: 28, percent: 10 },
  { label: "Admin", value: 10, percent: 4 },
];

const trend = [
  { month: "T1", average_score: 72 },
  { month: "T2", average_score: 78 },
  { month: "T3", average_score: 81 },
  { month: "T4", average_score: 85 },
  { month: "T5", average_score: 88 },
  { month: "T6", average_score: 90 },
];

const courses = [
  { course_id: "c1", title: "An toan thong tin ngan hang", thumbnail_url: "", progress_percent: 65, score: 0 },
  { course_id: "c2", title: "Quy dinh phong chong rua tien", thumbnail_url: "", progress_percent: 100, score: 92 },
  { course_id: "c3", title: "Nghiep vu giam sat tin dung", thumbnail_url: "", progress_percent: 40, score: 0 },
];

const notices = [
  { id: "n1", type: "course_assigned", title: "Khoa hoc moi duoc giao", content: "Ban vua duoc giao khoa An toan thong tin.", read: false, created_at: "2026-06-10T08:00:00Z" },
  { id: "n2", type: "quiz_result", title: "Ket qua kiem tra", content: "Ban dat 92/100 khoa Phong chong rua tien.", read: false, created_at: "2026-06-08T10:00:00Z" },
  { id: "n3", type: "system", title: "Bao tri he thong", content: "He thong bao tri 22h-23h ngay 15/06.", read: true, created_at: "2026-06-05T09:00:00Z" },
];

const users = [
  { id: "u1", full_name: "Nguyen Van A", email: "a@sbv.gov.vn", staff_code: "CB001", department: "Thanh tra 1", role: "admin", status: "active", position: "Chuyen vien chinh" },
  { id: "u2", full_name: "Tran Thi B", email: "b@sbv.gov.vn", staff_code: "CB002", department: "Thanh tra 2", role: "instructor", status: "active", position: "Giang vien" },
  { id: "u3", full_name: "Le Van C", email: "c@sbv.gov.vn", staff_code: "CB003", department: "Giam sat 1", role: "learner", status: "inactive", position: "Chuyen vien" },
  { id: "u4", full_name: "Pham Thi D", email: "d@sbv.gov.vn", staff_code: "CB004", department: "Giam sat 2", role: "manager", status: "locked", position: "Truong phong" },
];

const departments = [
  { id: "d1", name: "Thanh tra 1", code: "TT1", staff_count: 45, active_staff_count: 42, completion_rate: 89, manager_name: "Nguyen Van A", created_at: "2025-01-01T00:00:00Z" },
  { id: "d2", name: "Thanh tra 2", code: "TT2", staff_count: 38, active_staff_count: 35, completion_rate: 79, manager_name: "Tran Thi B", created_at: "2025-01-01T00:00:00Z" },
  { id: "d3", name: "Giam sat 1", code: "GS1", staff_count: 52, active_staff_count: 50, completion_rate: 92, manager_name: "Le Van C", created_at: "2025-01-01T00:00:00Z" },
];

const deptStats = [
  { name: "Thanh tra 1", department: "Thanh tra 1", staff_count: 45, active_staff_count: 42, total_staff: 45, completed_courses: 40, average_score: 88, completion_rate: 89 },
  { name: "Thanh tra 2", department: "Thanh tra 2", staff_count: 38, active_staff_count: 35, total_staff: 38, completed_courses: 30, average_score: 82, completion_rate: 79 },
  { name: "Giam sat 1", department: "Giam sat 1", staff_count: 52, active_staff_count: 50, total_staff: 52, completed_courses: 48, average_score: 90, completion_rate: 92 },
];

const questions = [
  { id: "q1", content: "Rua tien la gi?", topic: "Phong chong rua tien", difficulty: "easy", type: "single" },
  { id: "q2", content: "Bao mat thong tin khach hang theo quy dinh nao?", topic: "An toan thong tin", difficulty: "medium", type: "single" },
];

const mockStore = { slices, trend, courses, notices, users, departments, deptStats, questions };

export function getMockData(path: string, method: string): unknown {
  const p = path.split("?")[0];
  const s = mockStore;

  // Nop bai kiem tra (POST)
  if (method === "POST" && p.includes("/quizzes/") && p.endsWith("/submit")) {
    return { attempt_id: "att-1", quiz_id: "c1", score: 85, correct_count: 17, total_questions: 20, passed: true, pass_threshold: 80, attempt_number: 1, submitted_at: new Date().toISOString() };
  }
  if (method !== "GET") return {};

  if (p === "/dashboard/learner") {
    return {
      kpis: [
        { key: "total_courses", label: "Khoa hoc cua toi", value: 8 },
        { key: "in_progress", label: "Dang hoc", value: 3 },
        { key: "completed", label: "Da hoan thanh", value: 5 },
        { key: "average_score", label: "Diem trung binh", value: 86, unit: "diem" },
      ],
      progress_distribution: [
        { label: "Hoan thanh", value: 5, percent: 62 },
        { label: "Dang hoc", value: 3, percent: 38 },
      ],
      score_trend: s.trend,
      ongoing_courses: s.courses,
      notices: s.notices,
    };
  }
  if (p === "/dashboard/admin") {
    return {
      kpis: [
        { key: "total_users", label: "Tong cong chuc", value: 256 },
        { key: "active_users", label: "Hoat dong", value: 240 },
        { key: "total_courses", label: "Khoa hoc", value: 24 },
        { key: "departments", label: "Phong/ban", value: 6 },
      ],
      role_distribution: s.slices,
      recent_courses: s.courses,
    };
  }

  if (p === "/users") return { items: s.users, total: s.users.length, page: 1, page_size: 10 };
  if (p === "/users/stats") return { total: 256, active: 240, inactive: 10, locked: 6, department_count: 6 };
  if (p === "/departments") return s.departments;
  if (p === "/departments/stats") return s.deptStats;

  if (p === "/courses") {
    return { items: s.courses.map((c) => ({ id: c.course_id, title: c.title, description: "Khoa hoc noi bo", thumbnail_url: "", status: "published", lesson_count: 8, enrolled_count: 120, created_at: "2026-01-01T00:00:00Z" })), total: s.courses.length, page: 1, page_size: 10 };
  }

  if (p === "/progress/courses") {
    return [
      { course_id: "c1", course_title: "Nghiep vu thanh tra, giam sat TCTD", status: "in_progress", progress_percent: 45, completed_lessons: 3, total_lessons: 8, study_time_seconds: 18900, final_score: null, last_accessed_at: "2026-06-12T09:00:00Z" },
      { course_id: "c2", course_title: "Phong chong rua tien", status: "in_progress", progress_percent: 75, completed_lessons: 6, total_lessons: 8, study_time_seconds: 24300, final_score: null, last_accessed_at: "2026-06-13T14:00:00Z" },
      { course_id: "c6", course_title: "Quy dinh ve an toan thong tin", status: "completed", progress_percent: 100, completed_lessons: 7, total_lessons: 7, study_time_seconds: 30600, final_score: 92, last_accessed_at: "2026-06-01T10:00:00Z" },
      { course_id: "c7", course_title: "Nghiep vu tin dung co ban", status: "completed", progress_percent: 100, completed_lessons: 9, total_lessons: 9, study_time_seconds: 28800, final_score: 88, last_accessed_at: "2026-05-28T16:00:00Z" },
    ];
  }

  if (p === "/learning/my-courses") {
    return [
      { id: "e1", course_id: "c1", title: "Nghiep vu thanh tra, giam sat to chuc tin dung", thumbnail_url: "", status: "in_progress", progress_percent: 45, completed_lessons: 3, total_lessons: 8, has_final_quiz: true },
      { id: "e2", course_id: "c2", title: "Phong chong rua tien trong linh vuc ngan hang", thumbnail_url: "", status: "in_progress", progress_percent: 75, completed_lessons: 6, total_lessons: 8, has_final_quiz: true },
      { id: "e3", course_id: "c3", title: "Quan tri rui ro trong doanh nghiep bao hiem", thumbnail_url: "", status: "in_progress", progress_percent: 20, completed_lessons: 2, total_lessons: 10, has_final_quiz: false },
      { id: "e4", course_id: "c4", title: "Phan tich tai chinh doanh nghiep bao hiem", thumbnail_url: "", status: "not_started", progress_percent: 0, completed_lessons: 0, total_lessons: 6, has_final_quiz: true },
      { id: "e5", course_id: "c5", title: "Bao mat va doi moi sang tao", thumbnail_url: "", status: "not_started", progress_percent: 0, completed_lessons: 0, total_lessons: 5, has_final_quiz: false },
      { id: "e6", course_id: "c6", title: "Quy dinh ve an toan thong tin", thumbnail_url: "", status: "completed", progress_percent: 100, completed_lessons: 7, total_lessons: 7, has_final_quiz: true },
      { id: "e7", course_id: "c7", title: "Nghiep vu tin dung co ban", thumbnail_url: "", status: "completed", progress_percent: 100, completed_lessons: 9, total_lessons: 9, has_final_quiz: true },
    ];
  }

  if (p.startsWith("/learning/courses/") && p.endsWith("/room")) {
    const lessons = [
      { id: "l1", title: "Vai tro, muc tieu cua thanh tra, giam sat", type: "video", media_url: "", duration_seconds: 930, order: 1 },
      { id: "l2", title: "Nguyen tac thanh tra, giam sat", type: "video", media_url: "", duration_seconds: 1100, order: 2 },
      { id: "l3", title: "Phan loai thanh tra, giam sat", type: "video", media_url: "", duration_seconds: 850, order: 3 },
      { id: "l4", title: "Quy trinh thanh tra tai cho", type: "video", media_url: "", duration_seconds: 1530, order: 4 },
      { id: "l5", title: "Ky thuat thu thap thong tin", type: "video", media_url: "", duration_seconds: 1335, order: 5 },
      { id: "l6", title: "Danh gia he thong KSNB", type: "document", media_url: "", duration_seconds: 0, order: 6 },
      { id: "l7", title: "Lap bao cao thanh tra", type: "slide", media_url: "", duration_seconds: 0, order: 7 },
      { id: "l8", title: "Ky thuat tham tra tai cho", type: "video", media_url: "", duration_seconds: 1200, order: 8 },
    ];
    return {
      course: { id: "e1", course_id: "c1", title: "Nghiep vu thanh tra, giam sat to chuc tin dung", thumbnail_url: "", status: "in_progress", progress_percent: 45, completed_lessons: 3, total_lessons: 8, has_final_quiz: true },
      lessons,
      lesson_progress: [
        { lesson_id: "l1", completed: true, last_position_seconds: 930 },
        { lesson_id: "l2", completed: true, last_position_seconds: 1100 },
        { lesson_id: "l3", completed: true, last_position_seconds: 850 },
        { lesson_id: "l4", completed: false, last_position_seconds: 324 },
      ],
    };
  }

  if (p.startsWith("/quizzes/") && p.endsWith("/results")) {
    return [{ attempt_id: "att-0", quiz_id: "c1", score: 85, correct_count: 17, total_questions: 20, passed: true, pass_threshold: 80, attempt_number: 1, submitted_at: "2026-05-20T10:00:00Z" }];
  }
  if (p.startsWith("/quizzes/")) {
    const mkOptions = (prefix: string) => [
      { id: prefix + "a", content: "CAMELS" },
      { id: prefix + "b", content: "SWOT" },
      { id: prefix + "c", content: "PESTEL" },
      { id: prefix + "d", content: "5 Forces" },
    ];
    const qs = Array.from({ length: 20 }, (_, i) => ({ id: "q" + (i + 1), content: "Cau " + (i + 1) + ": Phuong phap nao duoc su dung de danh gia toan dien hoat dong ngan hang?", type: "single", options: mkOptions("q" + (i + 1) + "-"), points: 5 }));
    return { id: "c1", course_id: "c1", title: "Bai kiem tra cuoi khoa: Nghiep vu thanh tra, giam sat TCTD", questions: qs, duration_minutes: 45, pass_threshold: 80, max_attempts: 3 };
  }

  if (p === "/question-bank") return { items: s.questions, total: s.questions.length, page: 1, page_size: 10 };
  if (p === "/question-bank/topics") return ["Phong chong rua tien", "An toan thong tin", "Nghiep vu tin dung"];

  if (p === "/reports/cards") {
    return [
      { label: "Ty le hoan thanh", value: 86, unit: "%", change: 5 },
      { label: "Cong chuc tham gia", value: 240, unit: "Nguoi", change: 12 },
      { label: "Khoa hoc", value: 24, unit: "Khoa", change: 3 },
      { label: "Diem trung binh", value: 87, unit: "diem", change: 2 },
    ];
  }
  if (p === "/reports/departments") return s.deptStats;
  if (p === "/reports/distribution") return s.slices;

  if (p === "/settings") {
    return { system_name: "He thong Dao tao truc tuyen", organization_name: "Cuc Quan ly, giam sat to chuc tin dung", support_email: "support@sbv.gov.vn", pass_threshold: 80, default_max_attempts: 3, enable_google_login: true, enable_email_notification: false, auto_lock_inactive_days: 0 };
  }

  if (p === "/certificates") {
    return [
      { id: "cert1", course_title: "Nghiep vu thanh tra, giam sat to chuc tin dung", learner_name: "Nguyen Van A", score: 92, issued_at: "2026-05-20T00:00:00Z", certificate_code: "QLGS-2026-000123" },
      { id: "cert2", course_title: "Quy dinh ve an toan thong tin", learner_name: "Nguyen Van A", score: 88, issued_at: "2026-04-15T00:00:00Z", certificate_code: "QLGS-2026-000098" },
      { id: "cert3", course_title: "Nghiep vu tin dung co ban", learner_name: "Nguyen Van A", score: 95, issued_at: "2026-03-10T00:00:00Z", certificate_code: "QLGS-2026-000061" },
    ];
  }

  if (p === "/notifications") return s.notices;
  if (p === "/notifications/summary") return { total: s.notices.length, unread: 2 };

  return [];
}