import { useEffect, useRef } from "react";

// Hook theo doi thoi gian hoc tren trang (tracking).
// Dem so giay nguoi dung o lai, dung khi tab an di de khong dem thua.
export function useTracking(onTick?: (seconds: number) => void) {
  const secondsRef = useRef(0);

  useEffect(() => {
    let timer: number | null = null;

    // Bat dau dem khi tab dang hien
    const start = (): void => {
      if (timer !== null) return;
      timer = window.setInterval(() => {
        secondsRef.current += 1;
        onTick?.(secondsRef.current);
      }, 1000);
    };

    // Dung dem khi tab an di
    const stop = (): void => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    // Theo doi trang thai hien/an cua tab
    const handleVisibility = (): void => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [onTick]);

  // Tra ve tong so giay da theo doi
  return { getElapsed: () => secondsRef.current };
}