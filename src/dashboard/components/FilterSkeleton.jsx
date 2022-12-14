import { Box, Skeleton } from "@mui/material";
import React from "react";

export const FilterSkeleton = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={56}
        sx={{ borderRadius: 3, mb: 3 }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={644.5}
        sx={{ borderRadius: 3 }}
      />
    </Box>
  );
};
