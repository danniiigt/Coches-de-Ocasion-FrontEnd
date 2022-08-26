import { Box, Typography } from "@mui/material";
import React from "react";
import { CarWrapper } from "./CarWrapper";

export const Cars = () => {
  return (
    <>
      <CarWrapper>
        <Box sx={{ p: 4, border: "1px solid #eee", borderRadius: 3 }}>
          <Typography>Hola</Typography>
        </Box>
      </CarWrapper>
    </>
  );
};
