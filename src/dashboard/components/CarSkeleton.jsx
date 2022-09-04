import { Skeleton } from "@mui/material";

export const CarSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={202}
        sx={{ borderRadius: 2 }}
      />
    </>
  );
};
