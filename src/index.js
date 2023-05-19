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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUfKa0ASctRFiAWnkSDl9WW-hLnQmVbVg",
  authDomain: "react-js-a9aca.firebaseapp.com",
  projectId: "react-js-a9aca",
  storageBucket: "react-js-a9aca.appspot.com",
  messagingSenderId: "624610062945",
  appId: "1:624610062945:web:d1ad4f27ae6e7aa2b4f020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
