## What is Suspense?

Suspense recap: https://github.com/reactjs/rfcs/blob/useevent/text/0213-suspense-in-react-18.md

```jsx
const ProfilePage = React.lazy(() => import("./ProfilePage")); // Lazy-loaded

// Show a spinner while the profile is loading
<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>;
```

Wait for something (data, component code, …) to be loaded so the component can be rendered.

## What changed in React 18?

You can now use Suspense on the server!

https://blog.openreplay.com/an-ultimate-guide-to-upgrading-to-react-18

> In React 18, you can now use Suspense on the server. With it, you can specify the loading state for a part of the component tree if it’s not yet ready for display. According to the React team, Suspense makes the “UI loading state” a first-class declarative concept in React, enabling you to build higher-level features. When a server response is delayed, React can stream HTML for the fallback so that the rest of the page can be viewed. Upon completion of the data, the user will be able to view the HTML content. Therefore, the entire page will no longer be slowed down by a slow data source on the server. To learn more about Suspense, check here.

https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md

## Data fetching with Suspense?

It's basically everywhere now … but still not considered stable.

## Demo: Intro

The goal: Much nicer way how to handle loading data and errors.

-> Show the before and after

## Demo: How it works

## Wait what?

when to use Suspense vs startTransition https://github.com/reactwg/react-18/discussions/94#discussioncomment-1406166
