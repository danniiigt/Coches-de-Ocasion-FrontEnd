import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { importCars } from "./store/cars";
import { GlobalStyles } from "./theme/GlobalStyles";

export const App = () => {
  const dispatch = useDispatch();
  const { page, orderBy, filterQuery } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(importCars(page || 1, 15, null, orderBy || "recent", filterQuery));
  }, [page, orderBy, filterQuery]);

  return (
    <>
      <GlobalStyles>
        <AppRouter />
      </GlobalStyles>
    </>
  );
};
