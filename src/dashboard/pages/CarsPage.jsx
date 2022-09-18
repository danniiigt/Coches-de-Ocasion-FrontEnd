import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importCars } from "../../store/cars";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  const dispatch = useDispatch();
  const { page, orderBy, filterQuery } = useSelector((state) => state.cars);

  useEffect(() => {
    console.log("Algo cambio!");
    console.log({ page, orderBy, filterQuery });
    dispatch(importCars(page || 1, 15, null, orderBy || "recent", filterQuery));
  }, [page, orderBy, filterQuery]);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
