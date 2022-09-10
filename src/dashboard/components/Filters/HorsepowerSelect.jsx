import { useContext, useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";
import { useSelector } from "react-redux";
import { FilterContext } from "./context/FilterContext";

function valuetext(value) {
  return `${value}cv`;
}

export const HorsepowerSelect = () => {
  const { filterQuery } = useSelector((state) => state.cars);
  const { hpMin, hpMax } = filterQuery;
  const { notAppliedFilterQuery, setNotAppliedFilterQuery } =
    useContext(FilterContext);
  const [horsepowerValue, setHorsepowerValue] = useState([hpMin, hpMax]);

  const handleChange = (event, newValue) => {
    setHorsepowerValue(newValue);
    setNotAppliedFilterQuery({
      ...notAppliedFilterQuery,
      hpMin: horsepowerValue[0],
      hpMax: horsepowerValue[1],
    });
  };

  return (
    <AccordionWrapper title="Potencia">
      <Typography variant="body2" noWrap gutterBottom>
        Entre {horsepowerValue[0]}cv y {horsepowerValue[1]}cv
      </Typography>
      <Slider
        getAriaLabel={() => "Horsepower Range"}
        min={50}
        max={1000}
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
