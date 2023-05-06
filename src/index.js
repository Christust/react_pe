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

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navigate } from "react-router-dom";

// Routes
import App from "./App";
import ErrorPage from "./views/ErrorPage";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";

// Redux
import store from "./store";
import { Provider } from "react-redux";

let token = localStorage.getItem("token");

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  if (state) {
    localStorage.setItem("state", JSON.stringify(state));
  }
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<DashboardPage />} />
      <Route
        path="login"
        element={token ? <Navigate to={"/"} /> : <LoginPage />}
      />
    </Route>
  )
  // [
  //   {
  //     path: "/",
  //     element: <App />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "login",
  //     element: token ? <Navigate to={"/"} /> : <LoginPage />,
  //   },
  // ]
);

window.api = authService;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
