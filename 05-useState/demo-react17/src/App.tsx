import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render", isActive, counter);
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsActive((prevIsActive) => !prevIsActive);
        }}
      >
        {isActive ? "Disable" : "Enable"}
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          setIsActive((prevIsActive) => !prevIsActive);
          setCounter((prevCounter) => prevCounter + 1);

          // setTimeout(() => {
          //   setIsActive((prevIsActive) => !prevIsActive);
          //   setCounter((prevCounter) => prevCounter + 1);
          // }, 200);

          // Promise.resolve().then(() => {
          //   setIsActive((prevIsActive) => !prevIsActive);
          //   setCounter((prevCounter) => prevCounter + 1);
          // });

          // Promise.resolve().then(() => {
          //   flushSync(() => {
          //     setIsActive((prevIsActive) => !prevIsActive);
          //   });
          //   setCounter((prevCounter) => prevCounter + 1);
          // });
        }}
      >
        {isActive ? "Disable" : "Enable"}
        and +1
      </button>
      <button
        type="button"
        onClick={() => {
          // // +1 in React 17 and 18
          // setCounter(counter + 1);
          // setCounter(counter + 1);

          // // +1 in React 17 and 18
          // Promise.resolve().then(() => {
          //   setCounter(counter + 1);
          //   setCounter(counter + 1);
          // });

          // // +2 in React 17 and 18
          // setCounter((prevCounter) => prevCounter + 1);
          // setCounter((prevCounter) => prevCounter + 1);

          // +2 in React 17 and 18
          Promise.resolve().then(() => {
            setCounter((prevCounter) => prevCounter + 1);
            setCounter((prevCounter) => prevCounter + 1);
          });
        }}
      >
        +2
      </button>
      {counter}
    </>
  );
}

export default App;
