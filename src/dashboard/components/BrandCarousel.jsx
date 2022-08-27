import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { Box, Button } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";

export const BrandCarousel = () => {
  const { data, isLoading, hasError } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/brands`
  );

  return (
    <Box
      sx={{
        color: "#eeee",
        maxWidth: "1330px",
        width: "93%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ScrollingCarousel
        rightIcon={false}
        leftIcon={false}
        className="scrollingCarousel"
      >
        {!isLoading &&
          data.brands.map((brand) => (
            <Button
              key={brand}
              color="inherit"
              sx={{
                marginRight: 0.5,
                borderRadius: 8,
                paddingLeft: 2.5,
                paddingRight: 2.5,
                "&:hover": {
                  color: "#F5E663",
                },
              }}
            >
              {brand}
            </Button>
          ))}
      </ScrollingCarousel>
    </Box>
  );
};
