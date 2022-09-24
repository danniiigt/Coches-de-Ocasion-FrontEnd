import { Button, Stack, Tooltip } from "@mui/material";
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
import {
  importCars,
  resetFilterQuery,
  setFilterQuery,
  setPage,
} from "../../store/cars";
import { FilterContext } from "./Filters/context/FilterContext";
import { useContext } from "react";
import { FilterProvider } from "./Filters/context/FilterProvider";

export const Filter = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { notAppliedFilterQuery } = useContext(FilterContext);
  const { page, orderBy, filterQuery } = useSelector((state) => state.cars);
  const date = new Date();
  const actualYear = date.getFullYear();

  const handleSubmitChanges = () => {
    if (Object.keys(notAppliedFilterQuery).length > 0) {
      dispatch(setFilterQuery(notAppliedFilterQuery));
      dispatch(setPage(1));

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleResetFilterQuery = () => {
    dispatch(resetFilterQuery());
    dispatch(
      importCars(page || 1, 15, null, "recent", {
        search: "",
        kmMin: 0,
        kmMax: 500000,
        priceMin: 0,
        priceMax: 500000,
        yearMin: 1975,
        yearMax: actualYear,
        brands: [],
        // brand: null,
        // gearBox: null,
        hpMin: 0,
        hpMax: 1000,
        // doors: null,
      })
    );
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
          <Tooltip title="Restablecer Filtros">
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
          </Tooltip>
          <Tooltip title="Aplicar Filtros">
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
          </Tooltip>
        </Stack>
      </FilterWrapper>
    </>
  );
};
