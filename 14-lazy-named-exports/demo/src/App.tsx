// const SomeComponent = React.lazy(() => import("./SomeComponent"));

// const OtherComponent = React.lazy(() =>
//   import("./OtherComponent").then((module) => ({
//     default: module.OtherComponent,
//   }))
// );

import { OtherComponent } from "./OtherComponent";
import SomeComponent from "./SomeComponent";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SomeComponent />
      <OtherComponent />
    </div>
  );
}

export default App;
