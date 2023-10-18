import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  window?.addEventListener("scroll", onStoreChange);
  return () => window?.removeEventListener("scroll", onStoreChange);
}

export function useYScroll() {
  return useSyncExternalStore(
    subscribe,
    () => window?.scrollY,
    () => undefined
  );
}
