import { fetchCars, fetchSelectedCar } from "../../helpers/";
import { setCars, setLoading, setSelectedCar } from "./carsSlice";

export const importCars = (
  page = 1,
  limit = 15,
  brand = null,
  orderBy = "recent"
) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const data = await fetchCars(page, limit, brand, orderBy);
    dispatch(setCars(data));
  };
};

export const importSelectedCar = (uid) => {
  return async (dispatch) => {
    const car = await fetchSelectedCar(uid);
    dispatch(setSelectedCar(car));
  };
};
