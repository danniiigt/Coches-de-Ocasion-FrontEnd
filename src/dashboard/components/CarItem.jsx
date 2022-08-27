import { Box, Divider, Stack, Typography } from "@mui/material";
import { CarImageCarousel } from "./CarImageCarousel";
import { format } from "currency-formatter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const CarItem = ({ car }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <Box
        data-aos="fade-right"
        sx={{
          border: "1px solid #eee",
          borderRadius: 3,
          height: 200,
          display: "flex",
          cursor: "pointer",
          width: "80%",
          boxShadow: "1px 1px 3px 0px #05050514;",
          position: "relative",

          "&:hover": {
            backgroundColor: "#fafafab7",
          },
        }}
      >
        <StarBorderIcon
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            color: "#7c7c7ced",
            "&:hover": {
              color: "primary.main",
            },
          }}
        />
        <Box
          sx={{
            width: "40%",
            height: "100%",
            borderRadius: 3,
          }}
        >
          <CarImageCarousel carImages={car.images} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            p: 4,
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              span: { color: "primary.main", fontWeight: 600, fontSize: 22 },
            }}
            fontWeight={300}
            gutterBottom
          >
            Precio: <span>{format(car.price, { code: "EUR" })}</span>
          </Typography>
          <Typography variant="h5" noWrap gutterBottom>
            {car.title}
          </Typography>
          <Stack direction="row" spacing={3} mt={2}>
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
            {car.carTags.combustion && (
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

          {car.carTags.warranty && (
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
        </Box>
      </Box>
    </>
  );
};
