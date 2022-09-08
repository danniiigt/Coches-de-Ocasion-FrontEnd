import { Box, Button, Stack, Typography } from "@mui/material";
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

export const Filter = () => {
  return (
    <>
      <FilterWrapper>
        <KilometersSlider />
        <PriceSlider />
        <YearSlider />
        <BrandSelect />
        <GearboxSelect />
        <HorsepowerSelect />
        <AccordionWrapper title="Puertas"></AccordionWrapper>
        <AccordionWrapper title="Más"></AccordionWrapper>
        <Stack direction="row">
          <Button
            fullWidth
            color="inherit"
            variant="contained"
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
            sx={{
              borderRadius: "0 0 6px 0",
              boxSizing: "border-box",
              boxShadow: "none",
              border: "1px solid #d8d8d8",
              borderLeft: "none",

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
