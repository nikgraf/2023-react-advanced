## Intro

```jsx
const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);
```

useSyncExternalStore is a hook recommended for reading and subscribing from external data sources in a way that’s compatible with concurrent rendering features like selective hydration and time slicing.

The goal is to avoid tearing. See https://github.com/reactwg/react-18/discussions/69

This method returns the value of the store and accepts three arguments:

- `subscribe`: function to register a callback that is called whenever the store changes.
- `getSnapshot`: function that returns the current value of the store.
  getServerSnapshot: function that returns the snapshot used during server rendering.

## Demo the Window width example

- show how it works

## Usage in the wild

### Zustand

https://github.com/pmndrs/zustand/blob/50af477055a6c95aa0aaa0d2f5558b0a85cc32f7/src/react.ts#L76-L176

https://github.com/pmndrs/zustand/blob/main/src/react.ts#L29-L43

### Apollo

- https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md#react-18

https://github.com/apollographql/apollo-client/pull/9675/files
https://github.com/apollographql/apollo-client/pull/9709

## Additional details

- selectedFields
- SSR

- interesting that suscribe doesn't need to return anything. getSnapshot is called!

## Shims to Support older React Versions

- use-sync-external-store/shim
- use-sync-external-store/with-selector

Example from here: https://betterprogramming.pub/5-new-hooks-in-react-18-300aa713cefe
https://blog.logrocket.com/exploring-react-18-three-new-apis/

## Resources

- https://blog.saeloun.com/2021/12/30/react-18-usesyncexternalstore-api
- https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
- https://blog.saeloun.com/2021/12/30/react-18-usesyncexternalstore-api
- https://github.com/reactwg/react-18/discussions/86
