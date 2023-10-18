## useId

Generates a unique ID. Surprise :D

!!! `useId` is not for generating keys in a list. Keys should be generated from your data.

## But why not just Math.random?

Super important to be able to reproduce the same key on the server and client. So if you refresh the page you will always get the same ID for the same element.

## What are they?

base 32 strings whose binary representation corresponds to the "position" and some form of mount count of a node in a tree

## Demo

- Show the code
- Show the result in the DOM
- Show that it always increases and never re-uses the same key

## Info

- useId generates a string that includes the : token. This helps ensure that the token is unique, but is not supported in CSS selectors or APIs like querySelectorAll.
- useId supports an identifierPrefix to prevent collisions in multi-root apps. To configure, see the options for hydrateRoot and ReactDOMServer.

## Demo 2

Switch to

```ts
const root = ReactDOM.createRoot(rootElement, { identifierPrefix: "yolo-" });
```

## Demo 3

Strict mode on

## Resources

- https://blog.saeloun.com/2021/12/09/react-18-useid-api
- https://github.com/facebook/react/pull/22644
- https://github.com/reactwg/react-18/discussions/111#discussioncomment-1517716
