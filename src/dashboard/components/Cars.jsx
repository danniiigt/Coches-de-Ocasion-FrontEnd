import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CarItem,
  CarsWrapper,
  CarsSkeleton,
  NoCarsFound,
  CarsViewModule,
} from "./";
import { setPage } from "../../store/cars";
import { useDispatch } from "react-redux";
import { FilterProvider } from "./Filters/context/FilterProvider";
import { CarsAside } from "./CarsAside";

export const Cars = ({ brandPage, noMarginTop }) => {
  const dispatch = useDispatch();
  const { isLoading, cars, page, maxPages, view } = useSelector(
    (state) => state.cars
  );

  const handlePaginationChange = (e, value) => {
    dispatch(setPage(value));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <FilterProvider>
        <CarsSkeleton />
      </FilterProvider>
    );
  } else {
    return (
      <CarsWrapper noMarginTop={noMarginTop}>
        <Stack direction="row" spacing={3}>
          <Stack
            sx={{ width: "80%" }}
            spacing={3}
            className="animate__animated animate__fadeIn"
          >
            {cars.length >= 1 &&
              view === "linear" &&
              cars.map((car, i) => (
                <CarItem
                  key={car.uid}
                  index={i}
                  car={car}
                  brandPage={brandPage}
                />
              ))}
            {cars.length >= 1 && view === "block" && (
              <CarsViewModule cars={cars} />
            )}
            {cars.length === 0 && <NoCarsFound />}
          </Stack>
          <CarsAside />
        </Stack>

        {maxPages === 0 ||
          (maxPages > 1 && (
            <Pagination
              sx={{ color: "white" }}
              count={maxPages}
              page={page}
              color="primary"
              onChange={handlePaginationChange}
            />
          ))}
      </CarsWrapper>
    );
  }
};
