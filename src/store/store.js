import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars";
import { themeSlice } from "./theme";

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    theme: themeSlice.reducer,
  },
});
