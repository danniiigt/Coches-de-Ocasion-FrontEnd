import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const CarWrapper = ({ children }) => {
  return (
    <Box
      className="animate__animated animate__fadeIn animate__delay-4s"
      sx={{
        position: "absolute",
        top: "640px",
        width: "100%",
      }}
    >
      <Stack
        spacing={5}
        sx={{
          width: "90%",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      >
        <Typography variant="h4" color="#303030">
          Añadidos recientemente
        </Typography>
        {children}
      </Stack>
    </Box>
  );
};
