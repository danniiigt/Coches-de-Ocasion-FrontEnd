import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const actualYear = date.getFullYear();

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    isLoading: true,
    page: null,
    maxPages: null,
    total: null,
    cars: null,
    filterQuery: {
      kmMin: 0,
      kmMax: 10000000,
      priceMin: 0,
      priceMax: 10000000,
      yearMin: 1975,
      yearMax: actualYear,
      //   brand: null,
      //   gearBox: ['Manual', 'Automatico'],
      hpMin: 60,
      hpMax: 750,
    },
    selectedCar: null,
  },
  reducers: {
    setCars: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.total = action.payload.total;
      state.cars = action.payload.cars;
      state.maxPages = action.payload.maxPages;
    },
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedCar: (state, action) => {},
    setFilterQuery: (state, action) => {},
  },
});

export const { setCars, setLoading, setPage, setSelectedCar, setFilterQuery } =
  carsSlice.actions;
