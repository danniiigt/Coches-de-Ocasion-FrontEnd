import { Box, Skeleton, Stack } from "@mui/material";
import { CarsWrapper, CarSkeleton, FilterSkeleton } from "./";

export const CarsSkeleton = () => {
  return (
    <>
      <CarsWrapper>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={50}
            width={"50%"}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={50}
            width={"15%"}
          />
        </Stack>

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
            <FilterSkeleton />
          </Box>
        </Stack>
      </CarsWrapper>
    </>
  );
};
