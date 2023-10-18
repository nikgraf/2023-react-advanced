## useDeferredValue

useDeferredValue(value) is hook that accepts a value and returns a new copy of the value that will defer to more urgent updates. The previous value is kept until urgent updates have completed. Then, the new value is rendered. This hook is similar to using debouncing or throttling to defer updates.

## Demo

- explain the app without the useDeferredValue hook and show how it is lagging clicking the button
- so ideally we can get rid of this lagging
- useDeferredValue (& memo) to the rescue - with them we can defer some rendering work
- demonstrate how memo affects the performance
- isPending!
  -> https://medium.com/ovrsea/asynchronous-rendering-with-usedeferredvalue-ce7b3675151f
  Neat trick showing which one is stale: compare values
  That said it might get expensive with more complex values e.g. large nested objects.
- what does it mean for re-rendering?
  - App will render the at least once per state update, might do twice
    -> see Dan's tweet reply https://twitter.com/dan_abramov/status/1569329509970677764
  - still useEffect will only run once 🤯
    -> goodbye predictable behavior 👋

## Future usage

Use-case: Showing stale content while fresh content is loading

Avoid loading states in combination with Suspense data loading.

https://github.com/reactwg/react-18/discussions/129

> Here, the example does not do useDeferredValue:
> https://codesandbox.io/s/priceless-cannon-yhbqce?file=/src/App.js
> As you can see, when you type into the input, the combobox results constantly turn into "Loading..." and then back into results.

> This version does useDeferredValue:
> https://codesandbox.io/s/romantic-tharp-wedx58?file=/src/App.js
> When you type into the input, the previous combobox results are dimmed out while we're refetching.

## Resources

https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
