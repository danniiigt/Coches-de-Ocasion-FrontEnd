import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { Box, Button } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { BrandCarouselSkeleton } from "./";
import { useDispatch } from "react-redux";
import { resetFilterQuery, setFilterQuery } from "../../store/cars";

export const BrandCarousel = ({ fullWidth }) => {
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/brands`
  );

  const handleSetBrand = (brand) => {
    dispatch(resetFilterQuery());
    dispatch(setFilterQuery({ brands: [brand] }));
  };

  return (
    <Box
      sx={{
        color: "#eeee",
        maxWidth: "1330px",
        width: fullWidth ? "100%" : "93%",
        padding: fullWidth ? "0 12px" : 0,
        boxSizing: fullWidth ? "border-box" : "",
        backgroundColor: fullWidth ? "#4167FE" : "",
        marginTop: fullWidth ? 2 : 0,
        borderRadius: fullWidth ? 4 : 0,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ScrollingCarousel
        rightIcon={false}
        leftIcon={false}
        className="scrollingCarousel"
      >
        {isLoading && <BrandCarouselSkeleton />}
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
              <Link
                onClick={() => handleSetBrand(brand)}
                to={`/coches-segunda-mano`}
              >
                {brand}
              </Link>
            </Button>
          ))}
      </ScrollingCarousel>
    </Box>
  );
};
