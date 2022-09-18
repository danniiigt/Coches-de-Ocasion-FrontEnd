import { Box, Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { CarsWrapper, CarSkeleton, Filter, SearchBox } from "./";

export const CarsSkeleton = () => {
  const { view } = useSelector((state) => state.cars);

  if (view === "block") {
    return (
      <>
        <CarsWrapper noMarginTop={true}>
          <Stack direction={{xs: "column-reverse", md: "row"}} spacing={3}>
            <Grid container spacing={3} sx={{xs: "100%", md: "73%"}}>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
              <Grid item xs={12} lg={4} md={6} sm={6}>
                <CarSkeleton />
              </Grid>
            </Grid>

            <Box sx={{ width: { xs: "0", md: "27%" }, display: {xs: "none", md: "block"} }}>
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
