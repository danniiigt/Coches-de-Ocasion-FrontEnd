import { Box } from "@mui/material";
import React from "react";

export const FilterWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
      }}
    >
      {children}
    </Box>
  );
};
