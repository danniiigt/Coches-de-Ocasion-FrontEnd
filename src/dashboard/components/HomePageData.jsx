import { Box, Divider, Stack, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { SellCar, BuyCar, CarCities, Footer, OurCars } from "./";

export const HomePageData = () => {
  const { theme } = useSelector((state) => state.theme);
  const matches = useMediaQuery("(max-width: 667px)");

  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: matches ? 650 : { lg: 820, xs: 750 },
        pb: 5,
      }}
    >
      <Box
        sx={{
          width: "93%",
          maxWidth: 1300,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <SellCar />
        <Divider />
        <BuyCar />
        <Divider />
        <OurCars />
      </Box>
      <CarCities />
      <Footer />
    </Box>
  );
};
