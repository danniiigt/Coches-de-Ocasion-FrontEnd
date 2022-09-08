import { MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { setOrderBy } from "../../../store/cars";

export const OrderBy = () => {
  const dispatch = useDispatch();
  const { orderBy } = useSelector((state) => state.cars);

  const handleOrderChange = (event) => {
    dispatch(setOrderBy(event.target.value));
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={orderBy}
      sx={{ width: "100%", backgroundColor: "white", borderRadius: "6px" }}
      onChange={handleOrderChange}
    >
      <MenuItem value={"recent"}>Más recientes</MenuItem>
      <MenuItem value={"price-desc"}>Más caros</MenuItem>
      <MenuItem value={"price-asc"}>Más baratos</MenuItem>
      <MenuItem value={"year-desc"}>Más modernos</MenuItem>
      <MenuItem value={"year-asc"}>Más antiguos</MenuItem>
      <MenuItem value={"km-asc"}>Con menos km</MenuItem>
      <MenuItem value={"km-desc"}>Con más km</MenuItem>
      <MenuItem value={"hp-desc"}>Con más cv</MenuItem>
      <MenuItem value={"hp-asc"}>Con menos cv</MenuItem>
    </Select>
  );
};
