// Cac kieu du lieu dung chung giua nhieu module.

// Ket qua phan trang chuan tra ve tu backend
export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Tham so phan trang gui len backend
export interface PaginationParams {
  page: number;
  pageSize: number;
  search?: string;
}

// Cau truc loi chuan hoa de hien thi tren giao dien
export interface ErrorInfo {
  status: number;
  message: string;
}

// Trang thai tai du lieu dung cho cac component
export type LoadStatus = "idle" | "loading" | "success" | "error";

// Lua chon dung cho dropdown / select
export interface SelectOption<T = string> {
  label: string;
  value: T;
}