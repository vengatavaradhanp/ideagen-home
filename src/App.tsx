import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "./components/Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
