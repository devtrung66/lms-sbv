import type { ReactElement } from "react";
import { Search } from "lucide-react";
import { questionBankActions } from "../../state/actions";
import { useQuestionFilters } from "../../state/selectors";
import { DIFFICULTY_OPTIONS } from "../../model/constants";

interface QuestionFiltersProps {
  // Danh sach chu de de loc
  topics: string[];
}

// Thanh bo loc ngan hang cau hoi: chu de, do kho, tim kiem.
export function QuestionFilters({ topics }: QuestionFiltersProps): ReactElement {
  const filters = useQuestionFilters();

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Loc theo chu de */}
      <select
        value={filters.topic ?? ""}
        onChange={(e) => questionBankActions.filterByTopic(e.target.value || undefined)}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        <option value="">Tất cả chủ đề</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>

      {/* Loc theo do kho */}
      <select
        value={filters.difficulty ?? ""}
        onChange={(e) =>
          questionBankActions.filterByDifficulty((e.target.value || undefined) as never)
        }
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        <option value="">Tất cả độ khó</option>
        {DIFFICULTY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Tim kiem */}
      <div className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          defaultValue={filters.search}
          onChange={(e) => questionBankActions.search(e.target.value)}
          placeholder="Tìm câu hỏi..."
          className="w-56 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}