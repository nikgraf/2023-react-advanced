## UseEffect

The purpose is to manage side effects in React components.

In the past it was mentally easier to graps using classes. Example:

```tsx
class Something extends React.Component {
  componentDidMount() {
    // do something
  }

  render() {
    return <div>Something</div>;
  }
}
```

_IMPORTANT_: Most of the time you doing something wrong if you use useEffect. Avoid it at all cost. It's a last resort and it WILL cause bugs.

Need examples: https://github.com/penx/use-effect-cheatsheet

## Demo

- Show how useEffect runs twice in DEVELOPMENT mode when StrictMode is used.

Maybe just use it without StrictMode? Because having different results for DEVELOPMENT and PRODUCTION is not a good idea?

- Let people guess when useEffect runs (without a depedency array, with counter in the dependency array, with no dependency array)
- Quiz when the cleanup function runs (see demo code)
- Show that the state value in the cleanup function is still the old one
- Show that a ref would be up to date, because it's the same object accross renders
- Show what the idea is for useEffect (Websockt subscribe example)

## Visualization

https://github.com/donavon/hook-flow/blob/master/hook-flow.pdf

## One Note on StrictMode

When a component mounts into the active render tree, it's useEffect (and useLayoutEffect) hooks are called twice in `DEVELOPMENT` mode when wrapped in `<StrictMode>`.

It's not happening in `production` mode.

Still you need to make sure that it works well in DEVELOPMENT mode, otherwise development will be messy.

## Intro for the Exercise

- Ask what's wrong with the exercise start version (don't tell the solution).

Explain the issue

1. fetch for Bob
2. fetch for Taylor
3. Taylor result is coming back
4. Bob result is coming back

## Resources

- https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects
- https://twitter.com/dan_abramov/status/1530380704487559169?s=21&t=W-8Rl-G-WjZ47c2Fsj-i-w
