import { Button, Grid, Stack, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SellCar = () => {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  return (
    <Grid
      container
      justifyContent="space-between"
      data-aos="fade-right"
      sx={{ mb: { xs: 6, xl: 0 } }}
    >
      <Grid item sm={12} md={6.5}>
        <Typography variant="h3" sx={{ color: theme.textPrimary }}>
          Le ayudamos a vender su coche
        </Typography>
        <Stack spacing={1} mt={5} mb={4} sx={{ color: theme.textPrimary }}>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Nos encargamos de todos los trámites
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Reportaje Fotográfico Profesional
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Publicación en los principales portales
            </Typography>
          </Stack>
        </Stack>
        <Button variant="outlined">PUBLICAR COCHE</Button>
      </Grid>
      <Grid
        item
        sm={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          img: {
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          },
        }}
      >
        <img src="https://www.flexicar.es/_next/image/?url=https%3A%2F%2Fwww.flexicar.es%2Fimages%2Fpublic%2Fhighlight-1_temp.png&w=640&q=75" />
      </Grid>
    </Grid>
  );
};
