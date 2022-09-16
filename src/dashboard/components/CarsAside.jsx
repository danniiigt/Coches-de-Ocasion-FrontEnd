import { Box, IconButton, Stack } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useDispatch, useSelector } from "react-redux";
import { OrderBy, Filter, SearchBox } from "./";
import { FilterProvider } from "./Filters/context/FilterProvider";
import { setBlockView, setLinearView } from "../../store/cars";

export const CarsAside = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <Stack sx={{ width: "20%" }} spacing={2}>
      <Stack direction="row" spacing={1.5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.bgSecondary,
            // p: "0px 10px",
            borderRadius: 2,
            border: `1px solid ${theme.borderColor}`,
          }}
        >
          <IconButton onClick={() => dispatch(setLinearView())}>
            <ViewListIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(setBlockView())}>
            <ViewModuleIcon />
          </IconButton>
        </Box>
        <OrderBy />
      </Stack>
      <SearchBox />
      <FilterProvider>
        <Filter />
      </FilterProvider>
    </Stack>
  );
};
