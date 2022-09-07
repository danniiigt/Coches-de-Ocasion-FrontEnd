import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importCars } from "../../store/cars";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(importCars(page || 1));
  }, [page]);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
