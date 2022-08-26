import React from "react";
import { Cars } from "../components/Cars";
import { NavMenu } from "../components/NavMenu";
import { Search } from "../components/Search";

export const HomePage = () => {
  return (
    <>
      <NavMenu />
      <Search />
      <Cars />
    </>
  );
};
