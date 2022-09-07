import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { CarItem, CarsWrapper, CarsSkeleton, Filter, SearchBox } from "./";
import { setPage } from "../../store/cars";
import { useDispatch } from "react-redux";

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
    return <CarsSkeleton />;
  } else {
    return (
      <CarsWrapper noMarginTop={noMarginTop}>
        <Stack direction="row" spacing={3}>
          <Stack sx={{ width: "80%" }} spacing={3}>
            {cars.map((car) => (
              <CarItem key={car._id} car={car} brandPage={brandPage} />
            ))}
          </Stack>
          <Stack sx={{ width: "20%" }} spacing={2}>
            <SearchBox />
            <Filter />
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
