import { Pagination, Stack, TextField } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import {
  CarItem,
  CarsWrapper,
  CarsSkeleton,
  Filter,
  CarsHeader,
  SearchBox,
} from "./";
import { getFetchUrl } from "../helpers/getFetchUrl";
import { useState } from "react";

export const Cars = ({ brandPage, noMarginTop }) => {
  const [pagination, setPagination] = useState(1);
  const { brandName, fetchUrl } = getFetchUrl(brandPage, pagination);
  const { data: dataCars, isLoading: isLoadingCars } = useFetch(fetchUrl);

  const handlePaginationChange = (e, value) => {
    setPagination(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoadingCars) {
    return <CarsSkeleton />;
  } else {
    return (
      <CarsWrapper noMarginTop={noMarginTop}>
        <CarsHeader brandName={brandName} totalCars={dataCars.total} />
        <Stack direction="row" spacing={3}>
          <Stack sx={{ width: "80%" }} spacing={3}>
            {dataCars.cars.map((car) => (
              <CarItem key={car._id} car={car} brandPage={brandPage} />
            ))}
          </Stack>
          <Stack sx={{ width: "20%" }} spacing={2}>
            <SearchBox />
            <Filter />
          </Stack>
        </Stack>

        <Pagination
          count={50}
          page={pagination}
          color="primary"
          onChange={handlePaginationChange}
        />
      </CarsWrapper>
    );
  }
};
