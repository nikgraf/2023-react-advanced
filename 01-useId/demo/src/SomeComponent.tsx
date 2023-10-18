import { useId } from "react";

// https://reactjs.org/docs/hooks-reference.html#useid
const SomeComponent: React.FC<{}> = () => {
  const id = useId();
  return <div id={id}>{id}</div>;
};

export default SomeComponent;
