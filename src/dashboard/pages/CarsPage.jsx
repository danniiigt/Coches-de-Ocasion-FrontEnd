import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importCars } from "../../store/cars";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  const dispatch = useDispatch();
  const { page, orderBy } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(importCars(page || 1, 15, null, orderBy || "recent"));
  }, [page, orderBy]);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
