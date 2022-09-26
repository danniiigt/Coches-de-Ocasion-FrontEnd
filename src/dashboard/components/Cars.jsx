import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CarItem,
  CarsWrapper,
  CarsSkeleton,
  NoCarsFound,
  CarsViewModule,
  SelectedCarImages,
} from "./";
import { importCars, setPage } from "../../store/cars";
import { useDispatch } from "react-redux";
import { FilterProvider } from "./Filters/context/FilterProvider";
import { CarsAside } from "./CarsAside";
import { useEffect } from "react";

export const Cars = ({ brandPage, noMarginTop }) => {
  const dispatch = useDispatch();
  const {
    isLoading,
    cars,
    page,
    maxPages,
    view,
    filterQuery,
    orderBy,
    selectedCar,
  } = useSelector((state) => state.cars);

  const handlePaginationChange = (e, value) => {
    dispatch(setPage(value));
    dispatch(
      importCars(value || 1, 15, null, orderBy || "recent", filterQuery)
    );
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [cars]);

  if (isLoading) {
    return (
      <FilterProvider>
        <CarsSkeleton />
      </FilterProvider>
    );
  } else {
    return (
      <>
        <CarsWrapper noMarginTop={noMarginTop}>
          <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={3}>
            <Stack
              sx={{ width: { xs: "100%", md: "78%" } }}
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
      </>
    );
  }
};
