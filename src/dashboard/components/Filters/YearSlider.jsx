import { useContext, useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";
import { useSelector } from "react-redux";
import { FilterContext } from "./context/FilterContext";

function valuetext(value) {
  return `${value}`;
}

export const YearSlider = () => {
  const { filterQuery } = useSelector((state) => state.cars);
  const { yearMin, yearMax } = filterQuery;
  const { notAppliedFilterQuery, setNotAppliedFilterQuery } =
    useContext(FilterContext);
  const [yearValue, setYearValue] = useState([yearMin, yearMax]);

  const handleChange = (event, newValue) => {
    setYearValue(newValue);
    setNotAppliedFilterQuery({
      ...notAppliedFilterQuery,
      yearMin: yearValue[0],
      yearMax: yearValue[1],
    });
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
