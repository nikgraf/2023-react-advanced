import { Fragment, memo, useEffect, useState, useTransition } from "react";
import { text } from "./text";

const BookText = ({ highlight }: { highlight: string }) => {
  if (highlight.length < 2) return <>{text}</>;

  const content = text.split(highlight).map((textEntry) => {
    return (
      <Fragment>
        {textEntry}
        <span style={{ background: "yellow" }}>{highlight}</span>
      </Fragment>
    );
  });

  return <>{content}</>;
};

const MemoedBookText = memo(BookText);

function App() {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(query, highlight);
  });

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
          // setHighlight(target.value);
          startTransition(() => setHighlight(target.value));
        }}
        value={query}
        type="text"
        style={{ fontSize: "3rem" }}
      />
      {isPending ? "searching" : null}
      <br />
      <MemoedBookText highlight={highlight} />
    </div>
  );
}

export default App;
