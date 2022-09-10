import { Button, Stack } from "@mui/material";
import {
  AccordionWrapper,
  FilterWrapper,
  KilometersSlider,
  PriceSlider,
  YearSlider,
  BrandSelect,
  GearboxSelect,
  HorsepowerSelect,
} from "./";
import DoneIcon from "@mui/icons-material/Done";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch } from "react-redux";
import { resetFilterQuery, setFilterQuery } from "../../store/cars";
import { FilterContext } from "./Filters/context/FilterContext";
import { useContext } from "react";
import { FilterProvider } from "./Filters/context/FilterProvider";

export const Filter = () => {
  const dispatch = useDispatch();
  const { notAppliedFilterQuery } = useContext(FilterContext);

  const handleSubmitChanges = () => {
    if (Object.keys(notAppliedFilterQuery).length > 0) {
      dispatch(setFilterQuery(notAppliedFilterQuery));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleResetFilterQuery = () => {
    dispatch(resetFilterQuery());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FilterWrapper>
        <KilometersSlider />
        <PriceSlider />
        <YearSlider />
        <BrandSelect />
        <GearboxSelect />
        <HorsepowerSelect />
        <Stack direction="row">
          <Button
            fullWidth
            color="inherit"
            variant="contained"
            onClick={handleResetFilterQuery}
            sx={{
              borderRadius: "0 0 0 6px",
              boxSizing: "border-box",
              boxShadow: "none",
              backgroundColor: "white",
              border: "1px solid #d8d8d8",

              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            <RestartAltIcon sx={{ color: "#3b3b3bed" }} />
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleSubmitChanges}
            sx={{
              borderRadius: "0 0 6px 0",
              boxSizing: "border-box",
              boxShadow: "none",
              border: "1px solid #d8d8d8",

              "&:hover": {
                boxShadow: "none",
                border: "1px solid primary.main",
              },
            }}
          >
            <DoneIcon />
          </Button>
        </Stack>
      </FilterWrapper>
    </>
  );
};
