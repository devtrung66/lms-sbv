import type { ReactElement } from "react";
import { TREND_RANGES } from "../../model/constants";
import { progressActions } from "../../state/actions";
import { useTrendMonths } from "../../state/selectors";

// Bo chon khoang thoi gian cho bieu do ket qua hoc tap (3/6/12 thang).
export function ProgressFilters(): ReactElement {
  const months = useTrendMonths();

  return (
    <select
      value={months}
      onChange={(e) => progressActions.changeTrendRange(Number(e.target.value))}
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
    >
      {TREND_RANGES.map((range) => (
        <option key={range.value} value={range.value}>{range.label}</option>
      ))}
    </select>
  );
}