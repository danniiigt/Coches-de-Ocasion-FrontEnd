import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Stack, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useDispatch, useSelector } from "react-redux";
import { OrderBy, Filter, SearchBox } from "./";
import { FilterProvider } from "./Filters/context/FilterProvider";
import { setBlockView, setLinearView } from "../../store/cars";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CarsAside = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <Accordion sx={{ width: { xs: "100%", md: "20%" }, background: "transparent", boxShadow: "none", "&::before": {opacity: 0}}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{backgroundColor: theme.bgSecondary, borderRadius: 3, border: `1px solid ${theme.borderColor}`}}
      >
        <Typography variant="body1">Filtros</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mb: 3, p: 0, paddingTop: 2}}>
        <Stack  spacing={2}>
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
      </AccordionDetails>
    </Accordion>
  );
};
