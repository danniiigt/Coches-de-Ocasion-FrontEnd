import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { importCars } from "../../store/cars";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(importCars());
  }, []);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
