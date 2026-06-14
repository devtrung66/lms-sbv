// Mot phong/ban trong don vi
export interface Department {
  id: string;
  // Ten phong/ban, vd "Thanh tra 1"
  name: string;
  // Ma phong/ban, vd "TT1"
  code: string;
  // So cong chuc thuoc phong/ban
  staffCount: number;
  // So cong chuc dang hoat dong
  activeStaffCount: number;
  // Ty le hoan thanh khoa hoc trung binh cua phong (phan tram)
  completionRate: number;
  // Truong phong (neu co)
  managerName?: string;
  createdAt: string;
}

// Du lieu tao/sua phong/ban
export interface DepartmentFormValues {
  name: string;
  code: string;
  managerName?: string;
}

// Thong ke phong/ban dung cho bang o trang quan tri nguoi dung (anh 2)
export interface DepartmentStat {
  name: string;
  staffCount: number;
  activeStaffCount: number;
  completionRate: number;
}