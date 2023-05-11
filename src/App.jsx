import * as React from "react";
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const loader = useSelector((state) => state.loader.count);
  return (
    <div>
      <Outlet />
      {loader > 0 && <Loader />}
    </div>
  );
}
