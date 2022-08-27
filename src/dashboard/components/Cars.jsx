import { Box, Typography } from "@mui/material";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { CarItem } from "./CarItem";
import { CarWrapper } from "./CarWrapper";

export const Cars = () => {
  const { data: dataCars, isLoading: isLoadingCars } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/cars`
  );

  return (
    <>
      <CarWrapper>
        {!isLoadingCars &&
          dataCars.cars.map((car) => <CarItem key={car._id} car={car} />)}
      </CarWrapper>
    </>
  );
};
