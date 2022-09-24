import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importCars } from "../../store/cars";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
