import { Box, Stack, Typography } from "@mui/material";
import { format } from "currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { importSelectedCar } from "../../store/cars";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import VerifiedIcon from "@mui/icons-material/Verified";

export const CarItemVertical = ({ car, index }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const indexesAnimated = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const combustionTypes = [
    "Gasolina",
    "Diesel",
    "Híbrido",
    "Gas natural (CNG)",
  ];

  const handleSelectCar = () => {
    const carId = car.uid;
    console.log(car);
    dispatch(importSelectedCar(carId));
    navigate(`/coches-segunda-mano/${carId}`);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.bgSecondary,
          borderRadius: "8px",
          border: `1px solid ${theme.borderColor}`,
          height: "100%",
          maxHeight: 374,
          width: "100%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",

          "&:hover": {
            border: "1px solid #2462FD",
          },
        }}
        onClick={handleSelectCar}
        className={
          indexesAnimated.includes(index)
            ? `animate__animated animate__fadeIn delay${index}`
            : `animate__animated animate__fadeIn delayDefault`
        }
      >
        <Box
          sx={{
            height: "66%",
            img: {
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            },
          }}
        >
          <img src={car.images[0]} alt="" />
        </Box>
        <Box sx={{ height: "fit-content", p: 2 }}>
          <Stack direction="row">
            <Typography variant="body1" noWrap>
              {car.title}
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: 800, ml: 2 }}
            >
              {format(car.price, { code: "EUR" })}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            className="scrollingCarousel"
            spacing={2}
            sx={{
              mt: 2,
              ml: -0.3,
              overflow: "scroll",
              "&::-webkit-scrollbar": { width: 0, height: 0 },
            }}
          >
            <Stack direction="row">
              <Typography variant="body2" fontWeight={300} noWrap>
                <LocationOnIcon
                  fontSize="small"
                  sx={{ mb: -0.5, mr: 1 }}
                  color="primary"
                />
                {car.carTags.location}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="body2" fontWeight={300} noWrap>
                <EditRoadIcon
                  fontSize="small"
                  sx={{ mb: -0.5, mr: 1 }}
                  color="primary"
                />
                {car.carTags.kilometers}kms
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                variant="body2"
                fontWeight={300}
                noWrap
                sx={{ width: "100%" }}
              >
                <CalendarTodayIcon
                  fontSize="small"
                  sx={{ mb: -0.5, mr: 1 }}
                  color="primary"
                />
                {car.carTags.year}
              </Typography>
            </Stack>
          </Stack>
          {car.carTags.warranty && car.carTags.warranty.startsWith("Garantía") && (
            <Stack direction="row" mt={1.5}>
              <Typography variant="body2" fontWeight={300} noWrap>
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
              <Stack direction="row" mt={1.5}>
                <Typography variant="body2" fontWeight={300} noWrap>
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
    </>
  );
};
