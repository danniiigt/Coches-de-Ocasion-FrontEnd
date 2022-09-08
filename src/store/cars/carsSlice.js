import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const actualYear = date.getFullYear();

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    isLoading: true,
    page: null,
    maxPages: null,
    orderBy: null,
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
      hpMin: 50,
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
      state.orderBy = action.payload.orderBy;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    setFilterQuery: (state, action) => {},
  },
});

export const {
  setCars,
  setOrderBy,
  setLoading,
  setPage,
  setSelectedCar,
  setFilterQuery,
} = carsSlice.actions;
