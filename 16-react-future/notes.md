## Explain / demo

## use

https://react.dev/reference/react/use
https://react.dev/reference/react/cache
https://react.dev/reference/react/experimental_taintObjectReference
https://react.dev/reference/react/experimental_taintUniqueValue
https://react.dev/reference/react/use-client
https://react.dev/reference/react/use-server

https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md
https://github.com/reactjs/rfcs/pull/229

What does really change?

### Data fetching

Before:

```tsx
const { data, isFetching} = useQuery(...);
```

After:

```tsx
// It suspends!
const data = use(fetchQuery(...));
```

### Other "Usable" types

Before:

```tsx
const theme = useThemeContext();
```

After:

```tsx
const theme = use(ThemeContext);
```

### Use can be used conditionally

```tsx
function Note({ id, shouldIncludeAuthor }) {
  const note = use(fetchNote(id));

  let byline = null;
  if (shouldIncludeAuthor) {
    const author = use(fetchNoteAuthor(note.authorId));
    byline = <h2>{author.displayName}</h2>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}
```

### Let's wait for the `cache` RFC

## Other …

https://github.com/facebook/react/blob/e3748a0bde80dd1f097fd8000702aba9fca454ef/packages/react/index.js#L56-L66

### Suspense List

- SuspenseList https://twitter.com/sebmarkbage/status/1535060882207559681?s=21&t=WxIRDwmhkar9qyCPTyEvgA

- https://github.com/facebook/react/issues/22771#issuecomment-969451702

## <Catch/>, createCatch() (for creating <TypedCatch/>) and raise()

React team is thinking about introducing new APIs:

<Catch/>, createCatch() (for creating <TypedCatch/>) and raise()

How to use: https://twitter.com/wongmjane/status/1661788254600073217

https://github.com/facebook/react/pull/26854

https://twitter.com/andaristrake/status/1663095725696188416?s=46&t=eemEy7xUHtm13BKhfZK2lw

## <Offscreen>

https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react

## React Server Components

https://github.com/reactjs/rfcs/pull/188
https://github.com/reactjs/rfcs/pull/189

https://waku.gg/
https://www.joshwcomeau.com/react/server-components/

## useEvent (canceled?)

https://typeofnan.dev/what-the-useevent-react-hook-is-and-isnt/

https://github.com/reactjs/rfcs/pull/220
https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md

Why not use `useCallback`?
see https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#drawbacks
