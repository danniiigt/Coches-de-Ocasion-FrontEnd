import React, { useEffect } from "react";
import { Cars, NavMenu } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { importCars } from "../../store/cars";

export const BrandPage = () => {
  const { page, orderBy } = useSelector((state) => state.cars);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let brandName = "";

  if (pathname.split("/").length === 2) {
    brandName = pathname.split("/")[1];
  }

  useEffect(() => {
    dispatch(importCars(page || 1, 15, brandName, orderBy || "recent"));
  }, [page, orderBy]);

  useEffect(() => {
    dispatch(importCars(1, 15, brandName, orderBy || "recent"));
  }, [brandName]);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={true} noMarginTop />
    </>
  );
};
