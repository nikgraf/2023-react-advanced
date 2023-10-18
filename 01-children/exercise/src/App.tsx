import { useState } from "react";
import Checkbox from "./Checkbox";

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        toggle
      </button>
      <br />
      <Checkbox>Do you like React?</Checkbox>
      <br />
      {isActive ? <Checkbox>Do you agree?</Checkbox> : null}
    </>
  );
}

export default App;
