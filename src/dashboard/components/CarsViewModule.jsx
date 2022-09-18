import { Grid } from "@mui/material";
import React from "react";
import { CarItemVertical } from "./";

export const CarsViewModule = ({ cars }) => {
  return (
    <>
      <Grid container spacing={3}>
        {cars.map((car, i) => (
          <Grid item xs={12} lg={4} md={6} sm={6}  key={car.uid}>
            <CarItemVertical car={car} index={i} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
