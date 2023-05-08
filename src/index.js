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

// Guard
import GuardComponent from "./components/guard/GuardComponent";

// Routes
import App from "./App";
import ErrorPage from "./views/ErrorPage";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";

// Redux
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => {
  const state = store.getState();
  if (state) {
    localStorage.setItem("state", JSON.stringify(state));
  }
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route
        index
        element={<GuardComponent children={<DashboardPage />}></GuardComponent>}
      />
      <Route
        path="login"
        element={
          store.getState().user.token ? <Navigate to={"/"} /> : <LoginPage />
        }
      />
    </Route>
  )
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
