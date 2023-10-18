## Demo

useInsertionEffect is the hook to be used if we want it to fire before all DOM mutations.

---

```js
// render function
// useInsertionEffect app is called
//
// react changes dom (but browser is blocked render) - already has calculated the layout
// useLayoutEffect app is called
//
// browsers is freed to paint
// useEffect app is called
```

---

useEffect(didUpdate) accepts a function that contains imperative, possibly effectful code, which are mutations, subscriptions, timers, logging, and other side effects. By default, effects run after every completed render, but the invocation can be controlled with a second argument of an array.

useLayoutEffect has the same signature as useEffect, but it fires synchronously after all DOM mutations. i.e. it is fired before useEffect. It is used to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

useInsertionEffect is introduced in React 18. It has the same signature as useEffect, but it fires synchronously before all DOM mutations. i.e. it is fired before useLayoutEffect. It is used to inject styles into the DOM before reading layout.

useInsertionEffect is intended for CSS-in-JS libraries, such as styled-components.

Since this hook is limited in scope, this hook does not have access to refs and cannot schedule updates.

Example in https://betterprogramming.pub/5-new-hooks-in-react-18-300aa713cefe

## Exercise

https://codesandbox.io/s/9o9h9?file=/src/ThemeButton.js

## Resources

- https://github.com/reactwg/react-18/discussions/110
