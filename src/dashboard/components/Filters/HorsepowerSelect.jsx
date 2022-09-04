import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";

function valuetext(value) {
  return `${value}cv`;
}

export const HorsepowerSelect = () => {
  const [horsepowerValue, setHorsepowerValue] = useState([150, 350]);

  const handleChange = (event, newValue) => {
    setHorsepowerValue(newValue);
  };

  return (
    <AccordionWrapper title="Potencia">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {horsepowerValue[0]}cv y {horsepowerValue[1]}cv
      </Typography>
      <Slider
        getAriaLabel={() => "Horsepower Range"}
        min={60}
        max={750}
        step={10}
        value={horsepowerValue}
        onChange={handleChange}
        color="primary"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </AccordionWrapper>
  );
};
