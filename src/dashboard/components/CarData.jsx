import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { format } from "currency-formatter";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PaletteIcon from "@mui/icons-material/Palette";
import BoltIcon from "@mui/icons-material/Bolt";
import SpeedIcon from "@mui/icons-material/Speed";
import engineIcon from "../../assets/engineIcon.png";
import HeightIcon from "@mui/icons-material/Height";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScaleIcon from "@mui/icons-material/Scale";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const CarData = () => {
  const { selectedCar: car } = useSelector((state) => state.cars);
  const { theme, type } = useSelector((state) => state.theme);
  const combustionTypes = [
    "Gasolina",
    "Diesel",
    "Híbrido",
    "Gas natural (CNG)",
  ];
  console.log(car);

  return (
    <>
      <Stack spacing={4} sx={{ mt: 3 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", mb: -2 }}>
          <Typography variant="h5" noWrap>
            {car.title}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} sx={{ ml: 3 }}>
            {format(car.price, { code: "EUR" })}
          </Typography>
        </Stack>
        <Divider />
        <Grid container rowGap={2} columns={6}>
          <Grid item sx={{ pl: 0, pr: 2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <CalendarTodayIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.year}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <EditRoadIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.kilometers}kms
              </Typography>
            </Stack>
          </Grid>
          {car.carTags.combustion &&
          combustionTypes.includes(car.carTags.combustion) ? (
            <Grid item sx={{ pr: 3.2 }}>
              <Stack direction="row">
                <Typography variant="h7" fontWeight={300} noWrap>
                  <LocalGasStationIcon
                    fontSize="small"
                    sx={{ mb: -0.5, mr: 1 }}
                    color="primary"
                  />
                  {car.carTags.combustion}
                </Typography>
              </Stack>
            </Grid>
          ) : (
            <Grid item sx={{ pr: 3.2 }}>
              <Stack direction="row">
                <Typography variant="h7" fontWeight={300} noWrap>
                  <LocalGasStationIcon
                    fontSize="small"
                    sx={{ mb: -0.5, mr: 1 }}
                    color="primary"
                  />
                  {car.carTags.emisions}
                </Typography>
              </Stack>
            </Grid>
          )}
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <LocationOnIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.location}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <DirectionsCarIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.type}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <SettingsSuggestIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.gear}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <SensorDoorIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.doors} Puertas
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AirlineSeatLegroomExtraIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.seats} Asientos
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PaletteIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.color}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <BoltIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.horsePower}cv
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <img src={engineIcon} alt="engine" color="primary" />
              <Typography variant="body1" fontWeight={300}>
                {car.carTags.enginecc}cc
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <SpeedIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carData.maxSpeed}
              </Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ pr: 3.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <ScaleIcon color="primary" fontSize="small" />
              <Typography variant="body1" fontWeight={300}>
                {car.carData.weight}
              </Typography>
            </Stack>
          </Grid>
          {car.carTags.warranty && car.carTags.warranty.startsWith("Garantía") && (
            <Grid item>
              <Stack direction="row">
                <Typography variant="h7" fontWeight={300} noWrap>
                  <VerifiedIcon
                    fontSize="small"
                    sx={{ mb: -0.5, mr: 1 }}
                    color="success"
                  />

                  {car.carTags.warranty}
                </Typography>
              </Stack>
            </Grid>
          )}
          {car.carTags.combustion &&
            !combustionTypes.includes(car.carTags.combustion) &&
            car.carTags.combustion.startsWith("Garantía") && (
              <Grid item>
                <Stack direction="row">
                  <Typography variant="h7" fontWeight={300} noWrap>
                    <VerifiedIcon
                      fontSize="small"
                      sx={{ mb: -0.5, mr: 1 }}
                      color="success"
                    />
                    {car.carTags.combustion}
                  </Typography>
                </Stack>
              </Grid>
            )}
        </Grid>
        <Divider />
        <Box
          sx={{
            backgroundColor: type === "light" ? theme.bgPrimary : "#1a1a1a",
            p: "1px 15px 0",
            borderRadius: 3,
            // border: `1px solid ${theme.borderColor}`,
          }}
        >
          <Typography variant="body1" sx={{ pt: 1.5 }} fontWeight={500}>
            Comentarios del anunciante
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 300 }}>
            <ReactMarkdown>{car.description}</ReactMarkdown>
          </Typography>
        </Box>
        <Divider />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2}>
            <DoneAllIcon color="primary" />
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{ span: { fontWeight: 450 } }}
            >
              <span>Limpieza</span> a fondo
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneAllIcon color="primary" />
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{ span: { fontWeight: 450 } }}
            >
              <span>Revision</span> de 250 puntos
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneAllIcon color="primary" />
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{ span: { fontWeight: 450 } }}
            >
              <span>Libre</span> de cargas
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneAllIcon color="primary" />
            <Typography
              variant="body1"
              fontWeight={300}
              sx={{ span: { fontWeight: 450 } }}
            >
              <span>Certificación</span> de kilometraje
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
