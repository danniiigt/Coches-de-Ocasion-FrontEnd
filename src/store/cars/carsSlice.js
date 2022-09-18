import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const actualYear = date.getFullYear();

const initialState = {
  isLoading: true,
  page: null,
  maxPages: null,
  orderBy: null,
  total: null,
  cars: null,
  view: localStorage.getItem("view") || "linear",
  filterQuery: {
    search: "",
    kmMin: 0,
    kmMax: 500000,
    priceMin: 0,
    priceMax: 500000,
    yearMin: 1975,
    yearMax: actualYear,
    brands: [],
    // brand: null,
    // gearBox: null,
    hpMin: 0,
    hpMax: 1000,
    // doors: null,
  },
  selectedCar: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
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
    closeSelectedCar: (state, action) => {
      state.selectedCar = null;
    },
    resetFilterQuery: (state, action) => {
      state.filterQuery = initialState.filterQuery;
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = {
        ...state.filterQuery,
        ...action.payload,
      };
    },
    setLinearView: (state, action) => {
      (state.view = "linear"), localStorage.setItem("view", "linear");
    },
    setBlockView: (state, action) => {
      (state.view = "block"), localStorage.setItem("view", "block");
    },
    setSearch: (state, action) => {
      state.filterQuery.search = action.payload
    }
  },
});

export const {
  setCars,
  setOrderBy,
  setLoading,
  setPage,
  setSelectedCar,
  closeSelectedCar,
  resetFilterQuery,
  setFilterQuery,
  setLinearView,
  setBlockView,
  setSearch,
} = carsSlice.actions;
