import { useSyncExternalStore } from "react";

function App() {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => {
      console.log("getSnapshot", window.innerWidth);
      return window.innerWidth;
    }
    // () => -1 // server value
  );

  return <p>Size: {width}</p>;
}

export default App;
