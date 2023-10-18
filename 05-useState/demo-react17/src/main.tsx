import { render } from "react-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");
render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  container
);
