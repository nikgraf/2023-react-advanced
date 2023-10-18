# Hooks with Props Getters

Also referred to as "Prop Collections and Getters" (Kent C. Dodds).

Examples:

- Downshift useCombobox
  https://www.downshift-js.com/use-combobox

## Intro: Props Spreading

```tsx
const ComboBox = () => {
  const myProps= {
    type: "text"
    placeholder: "Search",
  }

  return (
      <input {...myProps} />
  );
};
```

```tsx
const ComboBox = () => {
  return <input type="text" placeholder="Search" />;
};
```

## Example

```tsx
const ComboBox = () => {
  const { getInputProps, getLabelProps } = useCombobox();

  return (
    <div>
      <label {...getLabelProps}>Search</label>
      <input {...getInputProps()} />
    </div>
  );
};
```

- React Aria Hooks
  https://react-spectrum.adobe.com/react-aria/useMenu.html

Where is this pattern really useful?

Library creates where you apply lots of props and especially aria attributes.
Otherwise people will just leave them out and you get a worse experience than necessary with a small API change.
