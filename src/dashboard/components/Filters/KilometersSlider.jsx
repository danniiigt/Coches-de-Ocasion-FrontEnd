import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";

function valuetext(value) {
  return `${value} kms`;
}

export const KilometersSlider = () => {
  const [kmValue, setKmValue] = useState([0, 75000]);

  const handleChange = (event, newValue) => {
    setKmValue(newValue);
  };

  return (
    <AccordionWrapper title="Kilometros">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {kmValue[0]}kms y {kmValue[1]}kms
      </Typography>
      <Slider
        getAriaLabel={() => "Kilometers range"}
        max={500000}
        step={5000}
        value={kmValue}
        size="large"
        color="primary"
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </AccordionWrapper>
  );
};
