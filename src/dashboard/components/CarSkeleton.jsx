import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export const CarSkeleton = () => {
  const { view } = useSelector((state) => state.cars);

  if (view === "block") {
    return (
      <>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={355}
          sx={{ borderRadius: 2 }}
        />
      </>
    );
  } else {
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
  }
};
