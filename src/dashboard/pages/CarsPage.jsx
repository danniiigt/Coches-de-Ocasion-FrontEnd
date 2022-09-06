import React from "react";
import { Cars, NavMenu } from "../components";

export const CarsPage = () => {
  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={false} noMarginTop />
    </>
  );
};
