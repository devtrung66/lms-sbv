import type { ReactElement } from "react";
import { useUserList } from "../../hooks/useUserList";
import { userActions } from "../../state/actions";
import { useSelectedUserId } from "../../state/selectors";
import { UserRow } from "../components/UserRow";

// Tieu de cot cua bang danh sach cong chuc
const COLUMNS = [
  "Mã công chức",
  "Họ và tên",
  "Phòng / Ban",
  "Chức vụ",
  "Email công vụ",
  "Vai trò",
  "Trạng thái",
  "Thao tác",
];

// Bang danh sach cong chuc: tu lay du lieu qua hook, hien thi tung dong.
export function UserTable(): ReactElement {
  const { data, isLoading } = useUserList();
  const selectedId = useSelectedUserId();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-ink-muted">
            {COLUMNS.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Đang tải dữ liệu...
              </td>
            </tr>
          )}
          {!isLoading && data?.items.length === 0 && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Không có công chức nào phù hợp
              </td>
            </tr>
          )}
          {data?.items.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              selected={user.id === selectedId}
              onSelect={userActions.selectUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}