import { Box, Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { CarsWrapper, CarSkeleton, Filter, SearchBox } from "./";

export const CarsSkeleton = () => {
  const { view } = useSelector((state) => state.cars);

  if (view === "block") {
    return (
      <>
        <CarsWrapper noMarginTop={true}>
          <Stack direction="row" spacing={3}>
            <Grid container spacing={3} sx={{ width: "82%" }}>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={4}>
                <CarSkeleton />
              </Grid>
            </Grid>

            <Box sx={{ width: "20%" }}>
              <SearchBox />
              <Filter />
            </Box>
          </Stack>
        </CarsWrapper>
      </>
    );
  } else {
    return (
      <>
        <CarsWrapper noMarginTop={true}>
          <Stack direction="row" spacing={3}>
            <Stack sx={{ width: "80%" }} spacing={3}>
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
              <CarSkeleton />
            </Stack>

            <Box sx={{ width: "20%" }}>
              <SearchBox />
              <Filter />
            </Box>
          </Stack>
        </CarsWrapper>
      </>
    );
  }
};
