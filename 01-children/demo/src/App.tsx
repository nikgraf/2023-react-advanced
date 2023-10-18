import { useState } from "react";
import SomeComponent from "./SomeComponent";

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        toggle
      </button>
      <SomeComponent />
      {isActive ? <SomeComponent /> : null}
    </>
  );
}

export default App;
