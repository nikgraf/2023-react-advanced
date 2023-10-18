import { useCallback, useEffect, useState } from "react";
import * as Yjs from "yjs";

export const useYArray = (yArray: Yjs.Array<string>) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    const callback = () => {
      forceUpdate();
    };

    yArray.observe(callback);
    return () => yArray.unobserve(callback);
  }, [forceUpdate, yArray]);
  return yArray.toArray();
};
