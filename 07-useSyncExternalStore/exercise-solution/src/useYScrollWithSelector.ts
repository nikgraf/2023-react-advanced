// import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";
// console.log(useSyncExternalStoreWithSelector);

import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window?.addEventListener("scroll", onChange);
  return () => {
    window?.addEventListener("scroll", onChange);
  };
};

export function useYScrollWithSelector(selector?: (value: number) => number) {
  const currentValue = () => {
    const y = window?.scrollY || 0;
    if (selector) {
      return selector(y);
    } else {
      return y;
    }
  };

  return useSyncExternalStore(subscribe, currentValue, () => 1024);
}
