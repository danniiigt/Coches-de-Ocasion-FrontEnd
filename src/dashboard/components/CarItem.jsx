import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { importSelectedCar } from "../../store/cars";
import { CarImageCarousel } from "./CarImageCarousel";
import { format } from "currency-formatter";
import { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";
import { CarHoverButtons } from "./CarHoverButtons";

export const CarItem = ({ car, brandPage, index }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const indexesAnimated = [0, 1, 2, 3, 4, 5, 6];
  const combustionTypes = [
    "Gasolina",
    "Diesel",
    "Híbrido",
    "Gas natural (CNG)",
  ];
  const [hoverCar, setHoverCar] = useState(false);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const handleSelectCar = () => {
    const carId = car.uid;
    console.log(car);
    dispatch(importSelectedCar(carId));
    // navigate(`/coches-segunda-mano/${carId}`);
  };

  return (
    <>
      {car.carData && car.carTags && (
        <Link to={`/coches-segunda-mano/${car.uid}`}>
          <Box
            onMouseEnter={() => setHoverCar(true)}
            onMouseLeave={() => setHoverCar(false)}
            onClick={() => handleSelectCar()}
            className={
              indexesAnimated.includes(index) &&
              `animate__animated animate__fadeIn delay${index}`
            }
            data-aos={!indexesAnimated.includes(index) && "fade-right"}
            sx={{
              border: "1px solid #eee",
              borderRadius: 3,
              height: 200,
              display: "flex",
              cursor: "pointer",
              width: "100%",
              backgroundColor: theme.bgSecondary,
              border: `1px solid ${theme.borderColor}`,
              position: "relative",

              "&:hover": {
                border: "1px solid #2462FD",
              },
            }}
          >
            <Stack
              sx={{
                position: "absolute",
                top: 7.5,
                right: 15,
              }}
            >
              <Tooltip title="Favoritos">
                <IconButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { svg: { color: "primary.main" } },
                  }}
                >
                  <Link to={`/`}>
                    <StarBorderIcon
                      fontSize="small"
                      sx={{
                        color: "#7c7c7ced",
                      }}
                    />
                  </Link>
                </IconButton>
              </Tooltip>
              <CarHoverButtons hoverCar={hoverCar} />
            </Stack>
            <Box
              sx={{
                minWidth: "23%",
                height: "100%",
                borderRadius: 3,
              }}
            >
              <CarImageCarousel carImages={car.images} />
            </Box>
            <Box
              sx={{
                width: "77%",
                height: "100%",
                boxSizing: "border-box",
                p: 4,
                paddingTop: 3,
                paddingBottom: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  span: {
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: 22,
                  },
                }}
                fontWeight={300}
                gutterBottom
              >
                Precio: <span>{format(car.price, { code: "EUR" })}</span>
              </Typography>
              <Typography
                variant="h5"
                noWrap
                gutterBottom
                sx={{ width: hoverCar ? "95%" : "100%" }}
              >
                {car.title}
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                mt={2}
                className="scrollingCarousel"
                sx={{ width: hoverCar ? "94%" : "100%" }}
              >
                <Stack direction="row">
                  <Typography variant="h7" fontWeight={300} noWrap>
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mb: -0.5, mr: 1 }}
                      color="primary"
                    />
                    {car.carTags.location}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography variant="h7" fontWeight={300} noWrap>
                    <EditRoadIcon
                      fontSize="small"
                      sx={{ mb: -0.5, mr: 1 }}
                      color="primary"
                    />
                    {car.carTags.kilometers}kms
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography variant="h7" fontWeight={300} noWrap>
                    <CalendarTodayIcon
                      fontSize="small"
                      sx={{ mb: -0.5, mr: 1 }}
                      color="primary"
                    />
                    {car.carTags.year}
                  </Typography>
                </Stack>
                {car.carTags.combustion &&
                combustionTypes.includes(car.carTags.combustion) ? (
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
                ) : (
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
                )}
                {car.carData.averageConsumption && (
                  <Stack direction="row">
                    <Typography variant="h7" fontWeight={300} noWrap>
                      <LocalGasStationIcon
                        fontSize="small"
                        sx={{ mb: -0.5, mr: 1 }}
                        color="primary"
                      />
                      {car.carData.averageConsumption} media
                    </Typography>
                  </Stack>
                )}
                {!car.carData.averageConsumption && (
                  <Stack direction="row">
                    <Typography variant="h7" fontWeight={300} noWrap>
                      <DirectionsCarFilledOutlinedIcon
                        fontSize="small"
                        sx={{ mb: -0.5, mr: 1 }}
                        color="primary"
                      />
                      {car.carTags.type}
                    </Typography>
                  </Stack>
                )}
              </Stack>
              {/* 
          <Stack direction="row" spacing={3} mt={2}>
        </Stack> */}

              {car.carTags.warranty &&
                car.carTags.warranty.startsWith("Garantía") && (
                  <Stack direction="row" mt={2}>
                    <Typography variant="h7" fontWeight={300} noWrap>
                      <VerifiedIcon
                        fontSize="small"
                        sx={{ mb: -0.5, mr: 1 }}
                        color="success"
                      />

                      {car.carTags.warranty}
                    </Typography>
                  </Stack>
                )}
              {car.carTags.combustion &&
                !combustionTypes.includes(car.carTags.combustion) &&
                car.carTags.combustion.startsWith("Garantía") && (
                  <Stack direction="row" mt={2}>
                    <Typography variant="h7" fontWeight={300} noWrap>
                      <VerifiedIcon
                        fontSize="small"
                        sx={{ mb: -0.5, mr: 1 }}
                        color="success"
                      />
                      {car.carTags.combustion}
                    </Typography>
                  </Stack>
                )}
            </Box>
          </Box>
        </Link>
      )}
    </>
  );
};
