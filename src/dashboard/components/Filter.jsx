import { Box, Button, Typography } from "@mui/material";
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
        <Box
          sx={{
            width: "100%",
            height: 40,
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            cursor: "pointer",
            p: "5px 16px",
            boxSizing: "border-box",
            border: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 400,
              color: "#292929",
              width: "100%",
              textAlign: "center",
              textTransform: "uppercase",
              "&:hover": {
                color: "primary.main",
              },
            }}
            component="p"
          >
            Restablecer Filtros
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ borderRadius: "0 0 10px 10px" }}
        >
          Aplicar Filtros
        </Button>
      </FilterWrapper>
    </>
  );
};
