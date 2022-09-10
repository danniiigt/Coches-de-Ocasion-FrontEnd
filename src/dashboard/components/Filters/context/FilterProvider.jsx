import { useState } from "react";
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }) => {
  const [notAppliedFilterQuery, setNotAppliedFilterQuery] = useState({});

  return (
    <FilterContext.Provider
      value={{ notAppliedFilterQuery, setNotAppliedFilterQuery }}
    >
      {children}
    </FilterContext.Provider>
  );
};
