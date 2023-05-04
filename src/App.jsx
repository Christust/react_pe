import * as React from "react";
import Loader from "./components/loader/Loader";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
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
      <NavBar />
      <main></main>
      {/* TODO: Loader */}
      {false && <Loader />}
    </ThemeProvider>
  );
}
