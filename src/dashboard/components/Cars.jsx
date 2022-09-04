import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { CarItem, CarsWrapper, CarsSkeleton, Filter } from "./";
import { useLocation } from "react-router-dom";

export const Cars = ({ brandPage }) => {
  let fetchUrl = "";
  let brandName = null;

  if (brandPage) {
    const { pathname } = useLocation();
    brandName = pathname.replace("/", "");
    fetchUrl = `${import.meta.env.VITE_RESTSERVER_URL}/api/cars/${brandName}`;
  } else {
    fetchUrl = `${
      import.meta.env.VITE_RESTSERVER_URL
    }/api/cars?page=1&limit=30`;
  }
  const { data: dataCars, isLoading: isLoadingCars } = useFetch(fetchUrl);

  return (
    <>
      {isLoadingCars && (
        <>
          <CarsSkeleton />
        </>
      )}
      <CarsWrapper>
        {!isLoadingCars && (
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            {!isLoadingCars && (
              <Typography variant="h5" color="#303030">
                {brandName
                  ? `${dataCars.total} ofertas de ${brandName}`
                  : "37.289 Coches de segunda mano"}
              </Typography>
            )}
            <Select
              value={"recientes"}
              // inputProps={border: "none"}
            >
              <MenuItem value={"recientes"}>Coches más recientes</MenuItem>
              <MenuItem value={"masvistos"}>Coches más vistos</MenuItem>
              <MenuItem value={"mascaros"}>Coches más caros</MenuItem>
              <MenuItem value={"masbaratos"}>Coches más baratos</MenuItem>
              <MenuItem value={"maskm"}>Coches con más kilometros</MenuItem>
              <MenuItem value={"menoskm"}>Coches con menos kilometros</MenuItem>
              <MenuItem value={"mascv"}>Coches con mas cv</MenuItem>
              <MenuItem value={"menoscv"}>Coches con menos cv</MenuItem>
            </Select>
          </Stack>
        )}
        <Stack direction="row" spacing={3}>
          <Stack sx={{ width: "80%" }} spacing={3}>
            {!isLoadingCars &&
              dataCars.cars.map((car) => (
                <CarItem key={car._id} car={car} brandPage={brandPage} />
              ))}
          </Stack>
          {!isLoadingCars && (
            <Box sx={{ width: "20%" }}>
              <Filter />
            </Box>
          )}
        </Stack>
      </CarsWrapper>
    </>
  );
};
