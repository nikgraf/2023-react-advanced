import { memo, useDeferredValue, useEffect, useState } from "react";

const SlowUI = ({ value }: any) => {
  console.log("render SlowUI", value);
  // const t0 = performance.now();
  const result = Array(50000)
    .fill(1)
    .map((_, index) => <span key={index}>{index + value} </span>);
  // const t1 = performance.now();
  // console.log(`Took ${t1 - t0} milliseconds.`);
  return <>{result}</>;
};

const MemoedSlowUI = memo(SlowUI);

function App() {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);
  // const deferredValue = value;

  const isPending = deferredValue !== value;
  console.log("render App", deferredValue, value, isPending);

  useEffect(() => {
    console.log("useEffect:", deferredValue, value, isPending);
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setValue((prevValue) => prevValue + 1);
          }}
        >
          {value}
        </button>
        <div>{deferredValue}</div>
        {isPending ? <div>pending</div> : null}
      </div>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <MemoedSlowUI value={deferredValue} />
      </div>
    </>
  );
}

export default App;
