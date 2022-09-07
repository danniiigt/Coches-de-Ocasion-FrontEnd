import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars";

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
  },
});
