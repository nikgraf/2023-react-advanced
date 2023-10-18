## Returning `undefined` is now a valid React Component

Until now this was not valid. Only `null` was allowed. Now it's possible.

Note: Personally I have mixed feelings about it.

Maybe useful for

```tsx
{
  something && <div>{something}</div>;
}
```

Where is `null` vs `undefined` useful? (GraphQL does support a difference between null and undefined and you can implement a update behaviour like in the example below)

```js
update({
  name: null, // unset the value
  age: undefined, // ignore the value for the update
});
```

## Resources

https://stackoverflow.com/questions/42083181/is-it-possible-to-return-empty-in-react-render-function/52223388#52223388
