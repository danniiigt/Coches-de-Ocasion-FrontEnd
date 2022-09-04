import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { Box, Skeleton } from "@mui/material";

export const BrandCarouselSkeleton = () => {
  return (
    <>
      <ScrollingCarousel
        rightIcon={false}
        leftIcon={false}
        className="scrollingCarousel"
      >
        <Skeleton
          width={90}
          height={40}
          sx={{ ml: 2, mr: 3, cursor: "pointer" }}
        />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} animation="wave" sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} animation="wave" sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} animation="wave" sx={{ mr: 3 }} />
        <Skeleton width={90} height={40} animation="wave" sx={{ mr: 3 }} />
      </ScrollingCarousel>
    </>
  );
};
