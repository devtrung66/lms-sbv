import { describe, it, expect } from "vitest";
import { filterUnread, countUnread, formatBadgeCount } from "../../lib/utils";
import { toNotificationList } from "../../adapters/notificationAdapter";
import type { AppNotification } from "../../model/types";
import type { RawNotification } from "../../api/queries";

// Kiem thu don vi cho tien ich va adapter cua module notifications.
const sample: AppNotification[] = [
  { id: "1", type: "system", title: "A", content: "x", read: false, createdAt: "2025-01-01T00:00:00Z" },
  { id: "2", type: "system", title: "B", content: "y", read: true, createdAt: "2025-01-02T00:00:00Z" },
  { id: "3", type: "system", title: "C", content: "z", read: false, createdAt: "2025-01-03T00:00:00Z" },
];

describe("notifications - utils", () => {
  it("loc thong bao chua doc", () => {
    expect(filterUnread(sample)).toHaveLength(2);
  });

  it("dem thong bao chua doc", () => {
    expect(countUnread(sample)).toBe(2);
  });

  it("dinh dang badge tren 99", () => {
    expect(formatBadgeCount(5)).toBe("5");
    expect(formatBadgeCount(150)).toBe("99+");
  });
});

describe("notifications - adapter", () => {
  it("sap xep thong bao moi nhat len dau", () => {
    const raws: RawNotification[] = [
      { id: "1", type: "system", title: "Cu", content: "", read: false, created_at: "2025-01-01T00:00:00Z" },
      { id: "2", type: "system", title: "Moi", content: "", read: false, created_at: "2025-03-01T00:00:00Z" },
    ];
    const list = toNotificationList(raws);
    expect(list[0]?.id).toBe("2");
  });
});