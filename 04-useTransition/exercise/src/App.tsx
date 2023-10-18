import { Fragment, memo, useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(query);
  });

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
        }}
        value={query}
        type="text"
        style={{ fontSize: "3rem" }}
      />
      <br />
      <MemoedBookText highlight={query} />
    </div>
  );
}

export default App;
