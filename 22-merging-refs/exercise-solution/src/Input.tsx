import { ComponentPropsWithoutRef, forwardRef, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useMergeRefs } from "./useMergeRefs";

type Props = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  props,
  externalRef
) {
  const { ref, inView } = useInView();
  const myRef = useRef<HTMLInputElement>(null);

  const inputRef = useMergeRefs([ref, myRef, externalRef]);

  useEffect(() => {
    if (inView) {
      console.log("Input is in view");
      myRef.current?.setAttribute("placeholder", "H");
      setTimeout(() => {
        myRef.current?.setAttribute("placeholder", "He");
        setTimeout(() => {
          myRef.current?.setAttribute("placeholder", "Hel");
          setTimeout(() => {
            myRef.current?.setAttribute("placeholder", "Hell");
            setTimeout(() => {
              myRef.current?.setAttribute("placeholder", "Hello");
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }
  }, [inView]);

  return <input ref={inputRef} {...props} />;
});

export default Input;
