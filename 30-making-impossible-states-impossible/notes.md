## Making impossible states impossible

Source:

- "Making Impossible States Impossible" by Richard Feldman https://www.youtube.com/watch?v=IcgmSRJHu_8
- "Making illegal states unrepresentable" by Yaron Minsky in 2010!!! https://blog.janestreet.com/effective-ml-video/

# Practical comparison between useState vs useReducer

## Let's look at an example

A request response can either be: Loading or Successful or Error

```tsx
const [loading, setLoading] = React.useState(false);
const [response, setResponse] = React.useState(null);
const [errorMessage, setErrorMessage] = React.useState(null);
```

```js
async function handleSubmit(values) {
  setLoading(true);
  try {
    const responseJson = await fetch("/projects").then((r) => r.json());
    setResponse(responseJson);
    setErrorMessage(null);
    setLoading(false);
  } catch (error) {
    setErrorMessage("Something went wrong!");
    setLoading(false);
  }
}
```

Loading

```js
loading === true;
response === null;
error === null;
```

Error

```js
loading === false;
response === null;
error === { message: "Something went wrong" };
```

Success

```js
loading === false;
response === { user: { name: "nikgraf" } };
error === null;
```

Invalid State!

```js
loading === true;
response === { user: { name: "nikgraf" } };
error === { message: "Something went wrong" };
```

Another invalid state

```js
loading === true;
response === { user: { name: "nikgraf" } };
error === null;
```

## useReducer never allows for impossible states

```js
const [state, dispatch] = React.useReducer(reducer, {
  loading: true,
  response: null,
  error: null,
});

function reducer(state, action) {
  switch (action.type) {
    case "SUCCESS": {
      return {
        loading: false,
        error: null,
        response: action.response,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        response: null,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
```

## Disciminated Unions

```ts
interface Loading {
  kind: "loading";
}

interface Success {
  kind: "success";
  response: { user: { name: string } };
}

interface Error {
  kind: "error";
  error: { message: string };
}

type Result = Loading | Success | Error;

const result: Result = {
  kind: "loading",
  error: { message: "Something went wrong" },
};
```

- https://basarat.gitbook.io/typescript/type-system/discriminated-unions

Works great with Redux https://basarat.gitbook.io/typescript/type-system/discriminated-unions#redux

## Use it for component props

Maybe not the best idea

e.g.

```tsx
<Button variant="primary" size="lg|md">
<Button variant="secondary" size="md|sm" color="green">
```

```tsx
interface PrimaryProps {
  variant: "primary";
  size: "lg" | "md";
}

interface SecondaryProps {
  variant: "secondary";
  size: "sm" | "md";
  color: string;
}

type ButtonProps = PrimaryProps | SecondaryProps;

const Button: React.FC<ButtonProps> = (props) => {
  …
};
```
