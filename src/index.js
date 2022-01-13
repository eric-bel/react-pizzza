import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

console.log(store.getState());

const add = () => {
  store.dispatch({
    type: "ДОБАВИТЬ",
  });
};

store.subscribe(() => {
  console.log("ИЗМЕНИЛСЯ", store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <button onClick={add}>Добавить</button>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
