import { Box } from "@mui/material";
import React from "react";

export const LoadingApp = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span class="loader"></span>
    </Box>
  );
};
