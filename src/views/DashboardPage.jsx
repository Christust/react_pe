import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "../components/navigation/NavBar";

const DashboardPage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar output={<Outlet />} />
    </ThemeProvider>
  );
};

export default DashboardPage;
