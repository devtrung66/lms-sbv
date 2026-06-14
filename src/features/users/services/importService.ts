import { importUsersFromExcel, type ImportResult } from "../api/mutations";

// Cac dinh dang file Excel duoc chap nhan
const ACCEPTED_TYPES = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-excel", // .xls
];

// Kich thuoc file toi da: 5 MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Ket qua kiem tra file truoc khi gui
export type FileCheck =
  | { ok: true }
  | { ok: false; message: string };

// Tang dich vu nhap cong chuc tu Excel.
export const importService = {
  // Kiem tra file hop le truoc khi tai len (dinh dang + dung luong)
  validateFile(file: File): FileCheck {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return { ok: false, message: "Chỉ chấp nhận file Excel (.xlsx, .xls)" };
    }
    if (file.size > MAX_FILE_SIZE) {
      return { ok: false, message: "Kích thước file vượt quá 5 MB" };
    }
    return { ok: true };
  },

  // Gui file len backend de nhap danh sach
  async upload(file: File): Promise<ImportResult> {
    const check = this.validateFile(file);
    if (!check.ok) {
      throw new Error(check.message);
    }
    return importUsersFromExcel(file);
  },
};