import { Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Typography
      variant="body2"
      textAlign="center"
      sx={{ mt: 5, span: { textDecoration: "underline" } }}
    >
      Copyright © <span>Coches de Ocasión</span> 2022. @danniiigt
    </Typography>
  );
};
