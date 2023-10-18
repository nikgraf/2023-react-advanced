# Exercise

Improve the `useArray` by switching to `useSyncExternalStore` hook.

Hint: If you just use `toArray` it will be a new array an not the same reference leading to this error: `The result of getSnapshot should be cached`. I used a ref to store a cached version of the array and use `JSON.stringify(cachedMyListRef.current) === JSON.stringify(newList)` to compare them.
