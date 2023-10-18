## useTransition

useTransition() is a hook for transition. It returns the transition state and a function to start the transition.

```tsx
const [isPending, startTransition] = useTransition();
```

React state updates are classified into two categories:

- Urgent updates — They reflect direct interaction, such as typing, clicking, pressing, dragging, etc.
- Transition updates — They transition the UI from one view to another.

**Note**: It's really important to use it in combination with React.memo.

Try the React Profiler to see how `SlowUI` vs `MemoedSlowUI` rerenders.

## When to use useDeferredValue vs useTransition

useDeferredValue and useTransition in the end do the same thing.

- Use useTransition() if you have access to the state update code and the update should has lower priority.
- Use useDeferredValue() if you don't have that access to the state update code.

Personally I find `useDeferredValue` easier to grasp.

## Resources

- https://reactjs.org/docs/hooks-reference.html#usetransition
- https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue
- https://swizec.com/blog/a-better-react-18-starttransition-demo/
- great example https://www.youtube.com/watch?v=TFwCI4HEdSY
