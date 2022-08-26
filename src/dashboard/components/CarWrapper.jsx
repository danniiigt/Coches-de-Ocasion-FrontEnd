import { Box } from "@mui/material";
import React from "react";

export const CarWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "640px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 12,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
