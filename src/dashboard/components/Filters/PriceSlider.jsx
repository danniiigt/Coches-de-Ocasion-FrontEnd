import React, { useContext, useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";
import { useSelector } from "react-redux";
import { FilterContext } from "./context/FilterContext";

function valuetext(value) {
  return `${value}€`;
}

export const PriceSlider = () => {
  const { filterQuery } = useSelector((state) => state.cars);
  const { priceMin, priceMax } = filterQuery;
  const { notAppliedFilterQuery, setNotAppliedFilterQuery } =
    useContext(FilterContext);
  const [priceValue, setPriceValue] = useState([priceMin, priceMax]);

  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
    setNotAppliedFilterQuery({
      ...notAppliedFilterQuery,
      priceMin: priceValue[0],
      priceMax: priceValue[1],
    });
  };

  return (
    <AccordionWrapper title="Precio">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {priceValue[0]}€ y {priceValue[1]}€
      </Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        max={750000}
        step={1000}
        value={priceValue}
        onChange={handleChange}
        color="primary"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </AccordionWrapper>
  );
};
