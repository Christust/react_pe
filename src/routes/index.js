// Router
import { createBrowserRouter } from "react-router-dom";

// Guard
import GuardComponent from "../components/guard/GuardComponent";
import AuthenticatedComponent from "../components/guard/AuthenticatedComponent";

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
