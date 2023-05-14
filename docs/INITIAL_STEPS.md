## React Router

Instalamos react router:

```
npm install react-router-dom localforage match-sorter sort-by
```

Agregamos la carpeta "routes" y dentro un archivo llamado index.js con el contenido:

```
// Router
import { createBrowserRouter } from "react-router-dom";

// Routes
import App from "../App";
import ErrorPage from "../views/ErrorPage";
import LoginPage from "../views/LoginPage";
import DashboardPage from "../views/DashboardPage";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
```

En nuestro index.js de la carpeta "src" agregamos:

```
...

// Router
import { RouterProvider } from "react-router-dom";
import router from "./routes";

...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MaterialUIProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MaterialUIProvider>
);

...
```

## Levantar Redux

Instalamos redux:

```
npm install @reduxjs/toolkit react-redux
```

Creamos la carpeta "store" con una subcarpeta "reducers", ambas carpetas con un index.js

Dentro de la carpeta "reducers" crearemos la carpeta "loader" la cual contendra el loaderSlice.js:

```
// loaderSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    count: 0,
  },
  reducers: {
    setLoaderCount: (state, action) => {
      const newCount = state.count + action.payload;
      if (newCount >= 0) {
        state.count = newCount;
      }
    },
  },
});

export const { setLoaderCount } = loaderSlice.actions;

export default loaderSlice.reducer;
```

Dentro del index.js de la carpeta "reducers" colocamos:

```
import loader from "./loader/loaderSlice";
let reducers = { loader };

const loadState = () => {
  try {
    const serializedData = localStorage.getItem("state");
    if (serializedData === null || serializedData === undefined) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

const configStore = { reducer: reducers, preloadedState: loadState() };

export default configStore;
```

Dentro de index.js de la carpeta "store" colocamos:

```
import { configureStore } from "@reduxjs/toolkit";
import configStore from "./reducers";

let store = configureStore(configStore);

export default store;
```

En nuestro index.js de la carpeta "src" agregamos:

```
//index.js
...

// Redux
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => {
  const state = store.getState();
  if (state) {
    localStorage.setItem("state", JSON.stringify(state));
  }
});

...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MaterialUIProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MaterialUIProvider>
);
...
```
