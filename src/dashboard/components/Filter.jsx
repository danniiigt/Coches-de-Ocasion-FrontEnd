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
import { useDispatch, useSelector } from "react-redux";
import { resetFilterQuery, setFilterQuery } from "../../store/cars";
import { FilterContext } from "./Filters/context/FilterContext";
import { useContext } from "react";
import { FilterProvider } from "./Filters/context/FilterProvider";

export const Filter = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
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
              backgroundColor: theme.bgSecondary,
              border: `1px solid ${theme.borderColor}`,

              "&:hover": {
                boxShadow: "none",
                backgroundColor: theme.bgPrimary,
              },
            }}
          >
            <RestartAltIcon sx={{ color: theme.textPrimary }} />
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
              border: `1px solid ${theme.borderColor}`,

              "&:hover": {
                boxShadow: "none",
                border: "1px solid primary.main",
              },
            }}
          >
            <DoneIcon sx={{ color: theme.bgTextPrimary }} />
          </Button>
        </Stack>
      </FilterWrapper>
    </>
  );
};
