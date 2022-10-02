import { Box, Divider, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { SellCar, BuyCar, CarCities, Footer } from "./";

export const HomePageData = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: 820,
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
      </Box>
      <CarCities />
      <Footer />
    </Box>
  );
};
