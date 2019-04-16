import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";

import "./styles.css";
import "./script.js";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
