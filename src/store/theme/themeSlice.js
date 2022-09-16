import { createSlice } from "@reduxjs/toolkit";

const lsMode = localStorage.getItem("mode");
let initialState = {
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
};

if (lsMode === "dark") {
  initialState = {
    type: "dark",
    theme: {
      bgPrimary: "#0c0c0c",
      bgSecondary: "#1c1c1c",
      borderColor: "#424242",
      textPrimary: "#e1e1e1",
      textSecondary: "white",
      bgTextPrimary: "#eeee",
      bgTextSecondary: "white",
    },
  };
} else if (lsMode === "light") {
  initialState = {
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
  };
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
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
      localStorage.setItem("mode", "dark");
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
      localStorage.setItem("mode", "light");
    },
  },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;
