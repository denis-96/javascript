import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import App from "./components/App";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) =>
//     dispatch(creator(...args));

// document.querySelector("#inc").addEventListener("click", inc);
// document.querySelector("#dec").addEventListener("click", dec);
// document
//   .querySelector("#rnd")
//   .addEventListener("click", () => rnd(Math.floor(Math.random() * 10)));
