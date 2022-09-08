import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import {
  CarItem,
  CarsWrapper,
  CarsSkeleton,
  Filter,
  SearchBox,
  OrderBy,
} from "./";
import { setPage } from "../../store/cars";
import { useDispatch } from "react-redux";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

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
          <Stack
            sx={{ width: "80%" }}
            spacing={3}
            className="animate__animated animate__fadeIn"
          >
            {/* <AnimateSharedLayout type="crossfade"> */}
            {/* <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CarItem
                    key={cars[0]._id}
                    car={cars[0]}
                    brandPage={brandPage}
                  />
                </motion.div>
              </AnimatePresence> */}
            {cars.map((car, i) => (
              <CarItem
                key={car._id}
                index={i}
                car={car}
                brandPage={brandPage}
              />
            ))}
            {/* </AnimateSharedLayout> */}
          </Stack>
          <Stack sx={{ width: "20%" }} spacing={2}>
            <OrderBy />
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
