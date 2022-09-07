import { fetchCars } from "../../helpers/fetchCars";
import { setCars, setLoading } from "./carsSlice";

export const importCars = (page = 1, limit = 15, brand = null) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const data = await fetchCars(page, limit, brand);
    dispatch(setCars(data));
  };
};
