import type { DepartmentReportRow } from "../model/types";

// Tang dich vu xuat bao cao ra tep (phia client).
// Xuat CSV truc tiep tu trinh duyet, khong can goi backend.
export const exportService = {
  // Chuyen bang bao cao theo phong/ban thanh noi dung CSV
  toCsv(rows: DepartmentReportRow[]): string {
    // Dong tieu de (tieng Viet co dau)
    const header = [
      "Phòng/Ban",
      "Tổng công chức",
      "Khóa hoàn thành",
      "Điểm trung bình",
      "Tỷ lệ hoàn thành (%)",
    ].join(",");

    // Cac dong du lieu, boc gia tri trong dau ngoac kep de an toan
    const lines = rows.map((r) =>
      [
        `"${r.department}"`,
        r.totalStaff,
        r.completedCourses,
        r.averageScore,
        r.completionRate,
      ].join(",")
    );

    return [header, ...lines].join("\n");
  },

  // Tai noi dung CSV ve may nguoi dung.
  // Them BOM de Excel mo dung tieng Viet co dau.
  downloadCsv(content: string, fileName: string): void {
    const bom = "\uFEFF";
    const blob = new Blob([bom + content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName.endsWith(".csv") ? fileName : `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },
};