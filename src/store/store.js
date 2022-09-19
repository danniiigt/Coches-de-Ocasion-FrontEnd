import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { carsSlice } from "./cars";
import { themeSlice } from "./theme";

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
  },
});
