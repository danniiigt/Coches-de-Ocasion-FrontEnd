import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import hyundaiCars from "../../../assets/hyundaiCars.png";
import { Link } from "react-router-dom";
import { resetFilterQuery } from "../../../store/cars";

export const OurCars = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  return (
    <Grid
      container
      justifyContent="space-between"
      data-aos="fade-right"
      sx={{ mb: { xs: 6, xl: 0 }, mt: 10 }}
    >
      <Grid item sm={12} md={6.5} mb={6}>
        <Typography
          variant="h3"
          sx={{
            color: theme.textPrimary,
            textAlign: { xs: "center", md: "inherit" },
          }}
        >
          Acerca de nuestros coches
        </Typography>
        <Stack spacing={1} mt={5} mb={4} sx={{ color: theme.textPrimary }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: { xs: "center", md: "inherit" } }}
          >
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">Limpieza a fondo</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: { xs: "center", md: "inherit" } }}
          >
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">Libre de cargas</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: { xs: "center", md: "inherit" } }}
          >
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Certificación de kilometraje
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: { xs: "center", md: "inherit" } }}
          >
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">Revisiones a fondo</Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Link
            to="/coches-segunda-mano"
            onClick={() => dispatch(resetFilterQuery())}
          >
            <Button variant="outlined">VER COCHES</Button>
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        sm={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          img: {
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          },
        }}
      >
        <img src={hyundaiCars} />
      </Grid>
    </Grid>
  );
};
