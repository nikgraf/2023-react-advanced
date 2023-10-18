## Different ways to type a component

```tsx
import { useId } from "react";

type Props = {
  checked: boolean;
  children: React.ReactNode;
};

function Checkbox({ checked, children }: Props) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} checked={checked} type="checkbox" name="react" />
    </>
  );
};

const Checkbox = ({ checked, children }: Props) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} checked={checked} type="checkbox" name="react" />
    </>
  );
};

const Checkbox: React.FC<Props> = ({ checked, children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} checked={checked} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
```

Which one is best?

## TypeScript Changed over time and so the recommendation

All the changes are documented here: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210

The probably most important change: `children` are not automatically added to `React.FC`.

You now can make children mandatory, optional or not allowed.

```tsx
import { useId } from "react";

const Checkbox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
```

vs

mandatory children? (they can be null and undefined)

```tsx
import { useId } from "react";

type Props = {
  children: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
```

## Codemod

```
npx types-react-codemod preset-18 ./src
```

```ts
React.PropsWithChildren<{ name: string }>
{
  name: string;
  children: React.ReactNode;
}

React.PropsWithOptionalChildren<{ name: string }>
{
  name: string;
  children?: React.ReactNode;
}
```

Important to know: there is a difference between optional via a ? and undefined.

```ts
type Yolo = {
  firstName: string;
  // lastName?: string;
  lastName: string | undefined;
};

const yolo: Yolo = {
  firstName: "John",
  // lastName: "Doe",
};
```

## IMPORTANT: there is a codemod to update the types

```
npx types-react-codemod preset-18 ./src
```

https://github.com/eps1lon/types-react-codemod
