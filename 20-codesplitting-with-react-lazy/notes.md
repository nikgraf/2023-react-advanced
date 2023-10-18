# Code Splitting with Reacy.lazy (and the bundler of your choice)

```tsx
import { lazy, Suspense } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));

const App = () => (
  <div>
    <h1>Markdown Editor</h1>
    <MarkdownEditor />
    <Suspense fallback={<div>loading …</div>}>
      <h2>Preview</h2>
      <MarkdownPreview />
    </Suspense>
  </div>
);
```

## Demo

https://beta.reactjs.org/reference/react/lazy
or the solution

## Where to use it?

- very large components
- large components that are not above the initial fold
- per page works surprisingly well

## References

- https://beta.reactjs.org/reference/react/lazy
