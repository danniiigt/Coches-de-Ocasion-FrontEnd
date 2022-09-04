import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";

function valuetext(value) {
  return `${value}€`;
}

export const PriceSlider = () => {
  const [priceValue, setPriceValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <AccordionWrapper title="Precio">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {priceValue[0]}€ y {priceValue[1]}€
      </Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        max={250000}
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
