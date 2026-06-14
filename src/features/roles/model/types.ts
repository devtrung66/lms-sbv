// Mot quyen cu the trong he thong (vd: "courses.create")
export interface Permission {
  // Ma quyen, dang "nhom.hanh_dong"
  id: string;
  // Ten hien thi (tieng Viet)
  label: string;
  // Nhom quyen, vd "Khoa hoc", "Nguoi dung"
  group: string;
}

// Mot vai tro trong he thong
export interface Role {
  id: string;
  // Ma vai tro, vd "admin", "instructor"
  code: string;
  // Ten hien thi (tieng Viet)
  name: string;
  // Mo ta vai tro
  description?: string;
  // Cac ma quyen vai tro nay co
  permissionIds: string[];
  // So nguoi dung dang giu vai tro nay
  userCount: number;
  // Vai tro he thong (khong duoc xoa/sua)
  isSystem: boolean;
}

// Du lieu tao/sua vai tro
export interface RoleFormValues {
  code: string;
  name: string;
  description?: string;
  permissionIds: string[];
}

// Mot o trong ma tran quyen (vai tro co quyen nao)
export interface PermissionMatrixCell {
  roleId: string;
  permissionId: string;
  granted: boolean;
}