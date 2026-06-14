import type { ReactElement } from "react";
import type { ProgressRow } from "../../model/types";
import { TimelineItem } from "./TimelineItem";

interface ProgressTableProps {
  rows: ProgressRow[];
  isLoading?: boolean;
}

// Danh sach tien do tung khoa, hien thi dang dong thoi gian.
export function ProgressTable({ rows, isLoading }: ProgressTableProps): ReactElement {
  if (isLoading) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải tiến độ...</div>;
  }

  if (rows.length === 0) {
    return (
      <div className="py-10 text-center text-sm text-ink-muted">
        Chưa có dữ liệu tiến độ học tập
      </div>
    );
  }

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-2 text-base font-semibold text-ink">Tiến độ từng khóa học</h3>
      <div>
        {rows.map((row) => (
          <TimelineItem key={row.courseId} row={row} />
        ))}
      </div>
    </div>
  );
}