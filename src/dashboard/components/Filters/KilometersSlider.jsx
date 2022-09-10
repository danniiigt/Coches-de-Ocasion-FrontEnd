import { useContext, useState } from "react";
import { Slider, Typography } from "@mui/material";
import { AccordionWrapper } from "../";
import { useSelector } from "react-redux";
import { FilterContext } from "./context/FilterContext";

function valuetext(value) {
  return `${value} kms`;
}

export const KilometersSlider = () => {
  const { filterQuery } = useSelector((state) => state.cars);
  const { kmMin, kmMax } = filterQuery;
  const { notAppliedFilterQuery, setNotAppliedFilterQuery } =
    useContext(FilterContext);
  const [kmValue, setKmValue] = useState([kmMin, kmMax]);

  const handleChange = (event, newValue) => {
    setKmValue(newValue);
    setNotAppliedFilterQuery({
      ...notAppliedFilterQuery,
      kmMin: kmValue[0],
      kmMax: kmValue[1],
    });
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
