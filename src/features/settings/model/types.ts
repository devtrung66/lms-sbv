// Cau hinh chung cua he thong (phia quan tri).
export interface SystemSettings {
  // Ten he thong hien thi tren giao dien
  systemName: string;
  // Don vi chu quan
  organizationName: string;
  // Email lien he ho tro
  supportEmail: string;
  // Nguong diem dat de qua bai kiem tra (phan tram)
  passThreshold: number;
  // So lan lam lai bai kiem tra toi da mac dinh
  defaultMaxAttempts: number;
  // Cho phep dang nhap bang Google Workspace
  enableGoogleLogin: boolean;
  // Bat thong bao qua email
  enableEmailNotification: boolean;
  // Tu dong khoa tai khoan sau bao nhieu ngay khong hoat dong (0 = tat)
  autoLockInactiveDays: number;
}

// Mot nhom cau hinh hien thi tren giao dien
export interface SettingSection {
  id: string;
  title: string;
  description?: string;
}

// Du lieu form cap nhat cau hinh (cho phep cap nhat tung phan)
export type SettingsFormValues = Partial<SystemSettings>;