import * as React from "react";
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Outlet />
      {/* TODO: Loader */}
      {false && <Loader />}
    </div>
  );
}
