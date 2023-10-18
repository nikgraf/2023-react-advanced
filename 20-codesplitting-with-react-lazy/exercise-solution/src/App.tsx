import { lazy, Suspense } from "react";

const Chart = lazy(() => import("./Chart"));

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <Suspense fallback={"loading chart …"}>
        <Chart />
      </Suspense>
    </div>
  );
}

export default App;
