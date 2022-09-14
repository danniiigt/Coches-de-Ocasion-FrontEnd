import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const FilterWrapper = ({ children }) => {
  const { selectedCar } = useSelector((state) => state.cars);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        position: "sticky",
        top: 175,
      }}
    >
      {children}
    </Box>
  );
};
