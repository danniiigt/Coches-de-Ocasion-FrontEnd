import { Pagination, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CarItem,
  CarsWrapper,
  CarsSkeleton,
  Filter,
  SearchBox,
  OrderBy,
  NoCarsFound,
} from "./";
import { setPage } from "../../store/cars";
import { useDispatch } from "react-redux";
import { FilterProvider } from "./Filters/context/FilterProvider";

export const Cars = ({ brandPage, noMarginTop }) => {
  const dispatch = useDispatch();
  const { isLoading, cars, page, maxPages } = useSelector(
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
              cars.map((car, i) => (
                <CarItem
                  key={car._id}
                  index={i}
                  car={car}
                  brandPage={brandPage}
                />
              ))}
            {cars.length === 0 && <NoCarsFound />}
          </Stack>
          <Stack sx={{ width: "20%" }} spacing={2}>
            <OrderBy />
            <SearchBox />
            <FilterProvider>
              <Filter />
            </FilterProvider>
          </Stack>
        </Stack>

        {maxPages === 0 ||
          (maxPages > 1 && (
            <Pagination
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
