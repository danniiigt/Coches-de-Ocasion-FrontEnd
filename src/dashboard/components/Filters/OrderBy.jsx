import { MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { setOrderBy, setPage } from "../../../store/cars";

export const OrderBy = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { orderBy, page, filterQuery } = useSelector((state) => state.cars);

  const handleOrderChange = (event) => {
    dispatch(setOrderBy(event.target.value));
    dispatch(setPage(1));
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={orderBy}
      sx={{
        width: "100%",
        backgroundColor: theme.bgSecondary,
        color: theme.textSecondary,
        borderRadius: "6px",
      }}
      onChange={handleOrderChange}
      size="small"
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
