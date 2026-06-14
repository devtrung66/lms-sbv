import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";
import { SETTING_SECTIONS } from "../../model/constants";
import { useSettingsStore } from "../../state/store";

// Thanh chuyen nhom cau hinh (tab doc ben trai).
export function SettingsTabs(): ReactElement {
  const active = useSettingsStore((state) => state.activeSection);
  const setActive = useSettingsStore((state) => state.setActiveSection);

  return (
    <nav className="space-y-1">
      {SETTING_SECTIONS.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => setActive(section.id)}
          className={cn(
            "w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors",
            active === section.id
              ? "bg-brand-50 font-medium text-brand-700"
              : "text-ink-muted hover:bg-slate-50"
          )}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}