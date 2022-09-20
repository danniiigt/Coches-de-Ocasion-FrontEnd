import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backSearch from "../../assets/backSearch.png";
import WestIcon from "@mui/icons-material/West";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const PageWrapper = ({ children, bigger, handleFormSubmit }) => {
  const { theme, type } = useSelector((state) => state.theme);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // IMAGE FOR BACKGROUND
        // backgroundImage:
        //   type === "light" &&
        //   `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiCSIzEKnpF__gxdxYBSpJgoJQG9uwj_Mcr98r5D2WKHhGJ2xk4oe5PE9DQyf0I7lCmA&usqp=CAU")`,
        // backgroundSize: "cover",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          a: {
            display: "flex",
            alignItems: "center",

            "&:hover": {
              color: "#2462FD",
            },
          },
        }}
        variant="body1"
      >
        <Link to="/">
          <WestIcon sx={{ mr: 1.5 }} /> Volver al inicio
        </Link>
      </Typography>
      <Box
        sx={{
          width: "93%",
          maxWidth: 1300,
          height: "100vh",
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          className="animate__animated animate__fadeIn"
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: bigger ? "70%" : "65%",
            height: bigger ? "69%" : "54%",
            borderRadius: 3,
            backgroundColor: theme.bgSecondary,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "42%",
              height: "100%",
              borderRadius: "12px 0 0 12px",
              p: 4,
              boxSizing: "border-box",
              backgroundColor: "primary.main",
              backgroundImage: `url("${backSearch}")`,
              backgroundPosition: "left, top",
            }}
          >
            {/* <img src={lamboAuth} alt="Car" /> */}
            <Typography variant="h4" fontWeight={500} sx={{ color: "white" }}>
              Coches de Ocasión
            </Typography>
            <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
              ¡Encuentra tu coche ideal aqui!
            </Typography>
            <Divider sx={{ mt: 3.5 }} />
            <Stack sx={{ mt: 3.5, color: "#e0e0e0" }} spacing={1}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThumbUpIcon color="secondary" fontSize="small" />
                <Typography variant="body1" fontWeight={300}>
                  +25.000 Clientes satisfechos
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocalOfferIcon color="secondary" fontSize="small" />
                <Typography variant="body1" fontWeight={300}>
                  +2.000 Coches vendidos
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DirectionsCarIcon color="secondary" fontSize="small" />
                <Typography variant="body1" fontWeight={300}>
                  +25.000 Coches registrados
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ mt: 3.5 }} />
            <Stack sx={{ mt: 3.5, color: "#e0e0e0" }} spacing={1}>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PersonIcon color="secondary" fontSize="small" />
                <Typography variant="body1" fontWeight={300}>
                  +50.000 Usuarios
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DoneAllIcon color="secondary" fontSize="small" />
                <Typography variant="body1" fontWeight={300}>
                  Vende tu coche sin comisiones
                </Typography>
              </Stack>
            </Stack>
          </Paper>
          <Box
            sx={{
              width: "58%",
              height: "100%",
              borderRadius: 3,
              p: 4,
              boxSizing: "border-box",
            }}
          >
            {children}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
