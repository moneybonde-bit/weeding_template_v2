import { useMemo } from "react";

export function useGuestName() {
  const name = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("to");
    if (!raw) return "Tamu Undangan";
    return decodeURIComponent(raw.replace(/\+/g, " ")).trim() || "Tamu Undangan";
  }, []);
  return name;
}
