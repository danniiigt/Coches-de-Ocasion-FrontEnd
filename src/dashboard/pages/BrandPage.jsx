import React from "react";
import { Cars, NavMenu } from "../components";

export const BrandPage = () => {
  return (
    <>
      <NavMenu bgTransparent={false} />
      <Cars brandPage={true} />
    </>
  );
};
