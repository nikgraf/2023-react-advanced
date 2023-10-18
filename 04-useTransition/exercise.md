## Exercise

The existing version is blocking on every character you type. Improve the performance by leveraging `useTransition`.

**Hint**: You need to split the `query` state and have a second version of it that can lag behind using `startTransition`.

Also leverage `isPending` from `useTransition` to show when the UI is out of date.
