import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import backSearch from "../../assets/backSearch.png";
import backSearchDark from "../../assets/backSearchDark.png";
import happyCar from "../../assets/happyCar.png";
import SellIcon from "@mui/icons-material/Sell";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";

export const SearchWrapper = ({ children }) => {
  const { type } = useSelector((state) => state.theme);

  return (
    <Box
      sx={{
        backgroundImage:
          type === "dark" ? `url(${backSearchDark})` : `url(${backSearch})`,
        backgroundSize: "cover",
        backgroundPosition: "0 -200px ",
        backgroundRepeat: "no-repeat",
        height: "640px",
        position: "absolute",
        top: 0,
        width: "100%",
        paddingTop: 31,
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          color="white"
          variant="h2"
          fontWeight={500}
          sx={{
            span: {
              textDecoration: "underline 3px #F5E663",
            },
          }}
        >
          ¡Encuentra <span>tu coche ideal</span> aqui!
        </Typography>
        <Typography
          color="white"
          variant="body1"
          fontSize={22}
          fontWeight={200}
        >
          Filtra por marca, modelo, kilometros, precio, potencia...
        </Typography>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack spacing={1} mt={6} mb={16}>
            <Stack
              direction="row"
              spacing={1.5}
              className="animate__animated animate__fadeIn animate__delay-1s"
            >
              <DirectionsCarIcon fontSize="small" color="secondary" />
              <Typography color="#ecececed">
                Más de 128.000 coches registrados
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1.5}
              className="animate__animated animate__fadeIn animate__delay-2s"
            >
              <SellIcon fontSize="small" color="secondary" />
              <Typography color="#ecececed">
                Más de 2.000 coches vendidos en el ultimo mes
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1.5}
              className="animate__animated animate__fadeIn animate__delay-3s"
            >
              <EmojiEmotionsIcon
                fontSize="small"
                color="secondary"
                className="animate__animated animate__heartBeat animate__delay-4s"
              />
              <Typography color="#ecececed">
                Más de 50.000 Clientes satisfechos
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              mr: 4,
              mt: -14,
              img: {
                maxHeight: "450px",
                maxWidth: "450px",
              },
            }}
          >
            <img src={happyCar} alt="" />
          </Box>
        </Stack>
        {children}
      </Box>
      <Box
        className="animate__animated animate__fadeIn animate__delay-4s"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
          img: { width: 60, height: 60, objectFit: "contain" },
        }}
      >
        <img
          src="https://recruitinginmotion.com/wp-content/uploads/2018/02/scrolldown.gif"
          alt=""
        />
      </Box>
    </Box>
  );
};
