import { describe, it, expect, beforeEach } from "vitest";
import { useProgressStore } from "../../state/store";
import { progressActions } from "../../state/actions";
import { DEFAULT_TREND_MONTHS } from "../../model/constants";

// Kiem thu tich hop luong chon khoang thoi gian bieu do.
describe("progress - luong khoang thoi gian", () => {
  beforeEach(() => {
    useProgressStore.getState().setTrendMonths(DEFAULT_TREND_MONTHS);
  });

  it("khoang mac dinh la 6 thang", () => {
    expect(useProgressStore.getState().trendMonths).toBe(6);
  });

  it("doi sang 12 thang", () => {
    progressActions.changeTrendRange(12);
    expect(useProgressStore.getState().trendMonths).toBe(12);
  });

  it("doi sang 3 thang", () => {
    progressActions.changeTrendRange(3);
    expect(useProgressStore.getState().trendMonths).toBe(3);
  });
});