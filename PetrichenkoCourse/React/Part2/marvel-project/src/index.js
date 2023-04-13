import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./App";

import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService();

marvelService
  .getAllCharacters(200, 10)
  .then((result) =>
    console.log(result.data.results.forEach((item) => console.log(item.name)))
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
