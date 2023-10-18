import { ComponentPropsWithoutRef, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  props,
  externalRef
) {
  return <input ref={externalRef} {...props} />;
});

export default Input;
