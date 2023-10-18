import { useState, useTransition } from "react";

const SlowUI = ({ value }: any) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{value - index} </span>
      ))}
  </>
);

function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(50000);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setValue(value + 1);
    // Note: click multiple times fast on the button and the numbers will get out of sync
    startTransition(() => setValue2(value2 + 1));

    // startTransition(() => setValue2((prevValue) => prevValue + 1));

    // // not necessary in this case, but still good to do
    // setValue((prevValue) => prevValue + 1);
  };

  return (
    <>
      <button onClick={handleClick}>{value}</button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <SlowUI value={value2} />
      </div>
    </>
  );
}

export default App;
