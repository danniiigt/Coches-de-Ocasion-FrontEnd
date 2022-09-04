import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";

function valuetext(value) {
  return `${value}`;
}

export const YearSlider = () => {
  const [yearValue, setYearValue] = useState([2005, 2015]);

  const handleChange = (event, newValue) => {
    setYearValue(newValue);
  };

  const date = new Date();
  const actualYear = date.getFullYear();

  return (
    <AccordionWrapper title="Año">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {yearValue[0]} y {yearValue[1]}
      </Typography>
      <Slider
        getAriaLabel={() => "Year range"}
        min={1975}
        max={actualYear}
        step={1}
        value={yearValue}
        onChange={handleChange}
        color="primary"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </AccordionWrapper>
  );
};
