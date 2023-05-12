import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Api
import authService from "./services/authService";

// Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Main styles
import "./index.scss";

// Redux
import store from "./store";
import { Provider } from "react-redux";

// Material
import { MaterialUIProvider } from "./providers/MaterialUIContext";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./routes";

store.subscribe(() => {
  const state = store.getState();
  if (state) {
    localStorage.setItem("state", JSON.stringify(state));
  }
});

window.api = authService;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MaterialUIProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MaterialUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
