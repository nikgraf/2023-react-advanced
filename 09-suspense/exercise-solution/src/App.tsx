import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Profile } from "./Profile";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <React.Suspense fallback="Loading …">
        <Profile />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
