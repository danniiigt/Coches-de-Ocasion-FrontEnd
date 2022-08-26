import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const AppTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
