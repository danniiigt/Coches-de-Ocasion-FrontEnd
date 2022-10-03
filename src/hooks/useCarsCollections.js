import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilterQuery, setFilterQuery } from "../store/cars/carsSlice";

export const useCarsCollections = () => {
  const dispatch = useDispatch();

  const cheapCarsCollection = () => {
    const filterQuery = {
      priceMin: 0,
      priceMax: 10000,
    };

    dispatch(resetFilterQuery());
    dispatch(setFilterQuery(filterQuery));
  };

  const km0CarsCollection = () => {
    const filterQuery = {
      kmMin: 0,
      kmMax: 3000,
    };

    dispatch(resetFilterQuery());
    dispatch(setFilterQuery(filterQuery));
  };

  const premiumCarsCollection = () => {
    const filterQuery = {
      priceMin: 50000,
    };

    dispatch(resetFilterQuery());
    dispatch(setFilterQuery(filterQuery));
  };

  return {
    cheapCarsCollection,
    km0CarsCollection,
    premiumCarsCollection,
  };
};
