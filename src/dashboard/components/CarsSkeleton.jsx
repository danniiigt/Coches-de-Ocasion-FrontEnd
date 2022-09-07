import { Box, Skeleton, Stack } from "@mui/material";
import { CarsWrapper, CarSkeleton, Filter, SearchBox } from "./";

export const CarsSkeleton = () => {
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
};
