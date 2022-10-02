import { Button, Grid, Stack, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const BuyCar = () => {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <Grid
      container
      justifyContent="space-between"
      data-aos="fade-left"
      sx={{ mt: 10 }}
    >
      <Grid
        item
        sm={5.5}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          img: {
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          },
        }}
      >
        <img src="https://www.flexicar.es/_next/image/?url=https%3A%2F%2Fwww.flexicar.es%2Fimages%2Fpublic%2Fhighlight-2.png&w=640&q=75" />
      </Grid>
      <Grid item sm={6.5}>
        <Typography variant="h3" sx={{ color: theme.textPrimary }}>
          Compramos su coche
        </Typography>
        <Stack spacing={1} mt={5} mb={4} sx={{ color: theme.textPrimary }}>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">Te damos el mejor precio</Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">Pagamos en el acto</Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Transferencia en el mismo día y sin coste
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Nos encargamos de todos los trámites
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <DoneAllIcon fontSize="small" color="primary" />
            <Typography color="inherit">
              Aceptamos tu vehículo como forma de pago
            </Typography>
          </Stack>
        </Stack>
        <Button variant="outlined">IR A TASACIÓN ONLINE</Button>
      </Grid>
    </Grid>
  );
};
