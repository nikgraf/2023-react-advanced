import { useEffect, useState } from "react";

export function useYScroll() {
  const [yScroll, setYScroll] = useState(window?.scrollY || 0);
  useEffect(() => {
    function onScrollChange() {
      setYScroll(window?.scrollY);
    }

    window?.addEventListener("scroll", onScrollChange);
    return () => {
      window?.addEventListener("scroll", onScrollChange);
    };
  }, []);
  return yScroll;
}
