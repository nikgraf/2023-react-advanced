## Exercise

As soon as the Input element should enter the viewport start animating the placeholder.

```tsx
const { ref, inView } = useInView();
const myRef = useRef<HTMLInputElement>(null);

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
```

Use the useMergeRefs hook to merge the refs and apply to the input element.
