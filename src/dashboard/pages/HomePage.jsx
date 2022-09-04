import React from "react";
import { Cars, NavMenu, Search } from "../components";

export const HomePage = () => {
  return (
    <>
      <NavMenu bgTransparent={true} />
      <Search />
      <Cars brandPage={false} />
    </>
  );
};
