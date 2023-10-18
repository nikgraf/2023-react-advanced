import { useEffect, useState } from "react";

// const SomeComponent: React.FC<{}> = () => {
//   console.log("SomeComponent render");
//   useEffect(() => {
//     console.log("SomeComponent Effect");
//   });

//   return <div>Some</div>;
// };

function App() {
  const [counter, setCounter] = useState(3);

  console.log("App render", counter);
  useEffect(() => {
    console.log("App Effect");
    // console.log("App Effect", counter);

    return () => {
      // the state is still from the previous render
      console.log("App Effect Cleanup");
      // console.log("App Effect Cleanup", counter);
    };
  });

  // Quiz: When does the cleanup function run?
  //
  // App render (initial render)
  // App Effect (initial render Effect)
  // -> click and update state
  //
  // A:
  // App Render
  // App Effect
  //
  // B:
  // App Effect Cleanup
  // App Render
  // App Effect
  //
  // C:
  // App Render
  // App Effect Cleanup
  // App Effect

  // const [counter, setCounter] = useState(3);
  // const counter2Ref = useRef(3);

  // console.log("App render", counter, counter2Ref.current);
  // useEffect(() => {
  //   // console.log("App Effect");
  //   console.log("App Effect", counter, counter2Ref.current);

  //   return () => {
  //     // the state is still from the previous render
  //     // console.log("App Effect Cleanup");
  //     console.log("App Effect Cleanup", counter, counter2Ref.current);
  //   };
  // }, [counter]);

  // The idea behind it:
  // useEffect(() => {
  //   const subscription = WebSocket.subscribe(roomId, (result) => {
  //     updateRoomContent(result);
  //   });

  //   return () => {
  //     WebSocket.unsubscribe(subscription);
  //   };
  // }, [roomId]);

  return (
    <div>
      <h1>Hello World</h1>
      {counter}
      <button
        onClick={() => {
          // counter2Ref.current = counter2Ref.current + 1;
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        +1
      </button>
      {/* {counter % 3 === 0 ? <SomeComponent /> : null} */}
    </div>
  );
}

export default App;
