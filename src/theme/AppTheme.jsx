import React from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./";
import { useSelector } from "react-redux";

export const AppTheme = ({ children }) => {
  const { type } = useSelector((state) => state.theme);

  if (type == "dark") {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
  } else if (type == "light") {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
  }
};
