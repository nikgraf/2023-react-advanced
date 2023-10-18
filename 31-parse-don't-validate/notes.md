## Parse, don't validate

Original: https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/

-> inspired Elm

Practical example:

https://itnext.io/parse-dont-validate-incoming-data-in-typescript-d6d5bfb092c8

## Zod

1. define a structure
2. generates a validation function and type guards (TS types)
3. PROFIT!

## Where should we use it?

At the boundary of your apps. Basically, where you get data from the outside world comes into your application. The earlier you catch it the less crazy bugs you will have.

### Example

```ts
const person = {
  name: "John",
  address: {
    street: "Main Street",
    city: "New York",
  },
};
```

-> Parsed

```ts
person.address.city ✅
```

-> Not parsed

```
Cannot read properties of undefined (reading 'city') 🤬
```
