import { Box, Breadcrumbs, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CarChat } from "./";

export const CarDataWrapper = ({ children }) => {
  const { selectedCar } = useSelector((state) => state.cars);

  return (
    <>
      <Box
        sx={{
          width: "93%",
          height: "100%",
          display: "flex",
          maxWidth: 1300,
          marginLeft: "auto",
          marginRight: "auto",
          mb: 2.5,
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Coches de Ocasión
          </Link>
          <Link underline="hover" color="inherit" to="/coches-segunda-mano">
            Anuncios
          </Link>
          <Typography color="text.primary">{selectedCar.title}</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          width: "93%",
          height: "100%",
          display: "flex",
          maxWidth: 1300,
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
        }}
      >
        <Paper
          sx={{
            width: "73%",
            backgroundColor: "white",
            boxSizing: "border-box",
            p: 3,
          }}
        >
          {children}
        </Paper>
        <Box
          sx={{
            width: "25%",
            maxHeight: 647,
            height: "fit-content",
            position: "sticky",
            top: 95,
          }}
        >
          {/* AQUI VA EL CHAT */}
          <CarChat />
        </Box>
      </Box>
    </>
  );
};
