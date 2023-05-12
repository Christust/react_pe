import * as React from "react";
import Loader from "./components/loader/Loader";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/navigation/NavBar";

export default function App() {
  const loader = useSelector((state) => state.loader.count);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <NavBar output={<Outlet />} />
      </ThemeProvider>
      {loader > 0 && <Loader />}
    </div>
  );
}
