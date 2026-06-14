import { useRef, type ReactElement } from "react";
import { Upload, X, FileSpreadsheet } from "lucide-react";
import { useImportExcel } from "../../hooks/useImportExcel";
import { usersConfig } from "../../config/users.config";

interface ImportExcelModalProps {
  open: boolean;
  onClose: () => void;
}

// Hop thoai nhap danh sach cong chuc tu file Excel.
export function ImportExcelModal({ open, onClose }: ImportExcelModalProps): ReactElement | null {
  const inputRef = useRef<HTMLInputElement>(null);
  const { importFile, isImporting, result, error, reset } = useImportExcel();

  if (!open) return null;

  // Xu ly khi chon file
  async function handleFile(file: File | undefined): Promise<void> {
    if (!file) return;
    reset();
    try {
      await importFile(file);
    } catch {
      // Loi da duoc luu trong state cua hook
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-card bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">Nhập công chức từ Excel</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-ink-muted hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        {/* Vung keo tha / chon file */}
        <div
          onClick={() => inputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 p-8 text-center hover:border-brand-500"
        >
          <FileSpreadsheet size={40} className="text-brand-500" />
          <p className="text-sm font-medium text-ink">Bấm để chọn file Excel (.xlsx, .xls)</p>
          <p className="text-xs text-ink-muted">Dung lượng tối đa 5 MB</p>
          <input
            ref={inputRef}
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={(e) => void handleFile(e.target.files?.[0])}
          />
        </div>

        {/* Cot bat buoc */}
        <p className="mt-3 text-xs text-ink-muted">
          File cần có các cột: {usersConfig.requiredColumns.join(", ")}.
        </p>

        {/* Trang thai */}
        {isImporting && <p className="mt-3 text-sm text-brand-600">Đang nhập dữ liệu...</p>}
        {error && <p className="mt-3 text-sm text-danger">{(error as Error).message}</p>}
        {result && (
          <p className="mt-3 text-sm text-green-700">
            Nhập thành công {result.succeeded} bản ghi, lỗi {result.failed} bản ghi.
          </p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-ink hover:bg-slate-50"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}