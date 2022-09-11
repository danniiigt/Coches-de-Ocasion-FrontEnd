import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    type: "light",
    theme: {
      bgPrimary: "#f3f3f3",
      bgSecondary: "white",
      borderColor: "#dddddd",
      textPrimary: "#404040",
      textSecondary: "#000000",
      bgTextPrimary: "#eeee",
      bgTextSecondary: "white",
    },
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.type = "dark";
      state.theme = {
        bgPrimary: "#0c0c0c",
        bgSecondary: "#1c1c1c",
        borderColor: "#363636",
        textPrimary: "#e1e1e1",
        textSecondary: "white",
        bgTextPrimary: "#eeee",
        bgTextSecondary: "white",
      };
    },
    setLightMode: (state, action) => {
      state.type = "light";
      state.theme = {
        bgPrimary: "#f3f3f3",
        bgSecondary: "white",
        borderColor: "#dddddd",
        textPrimary: "#404040",
        textSecondary: "#000000",
        bgTextPrimary: "#eeee",
        bgTextSecondary: "white",
      };
    },
  },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;
