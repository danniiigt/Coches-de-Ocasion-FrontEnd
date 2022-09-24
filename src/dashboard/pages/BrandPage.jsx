import React, { useEffect } from "react";
import { Cars, NavMenu } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { importCars, resetFilterQuery } from "../../store/cars";

export const BrandPage = () => {
  const { page, orderBy, filterQuery } = useSelector((state) => state.cars);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let brandName = "";

  if (pathname.split("/").length === 2) {
    brandName = pathname.split("/")[1];
  }

  useEffect(() => {
    dispatch(
      importCars(page || 1, 15, brandName, orderBy || "recent", filterQuery)
    );
  }, [page, orderBy, filterQuery]);

  useEffect(() => {
    dispatch(resetFilterQuery());
    // dispatch(importCars(1, 15, brandName, orderBy || "recent", filterQuery));
  }, [brandName]);

  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={true} noMarginTop />
    </>
  );
};
