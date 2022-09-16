import { Box, Stack, Typography } from "@mui/material";
import { format } from "currency-formatter";
import { useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import VerifiedIcon from "@mui/icons-material/Verified";

export const CarItemVertical = ({ car, index }) => {
  const { theme } = useSelector((state) => state.theme);
  const indexesAnimated = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const combustionTypes = [
    "Gasolina",
    "Diesel",
    "Híbrido",
    "Gas natural (CNG)",
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.bgSecondary,
          borderRadius: "8px",
          border: `1px solid ${theme.borderColor}`,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        className={
          indexesAnimated.includes(index)
            ? `animate__animated animate__fadeIn delay${index}`
            : `animate__animated animate__fadeIn delayDefault`
        }
      >
        <Box
          sx={{
            height: "100%",
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
          <Stack direction="row" spacing={2} sx={{ mt: 2, ml: -0.3 }}>
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