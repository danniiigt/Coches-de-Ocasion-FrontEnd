import { Box, Breadcrumbs, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CarChat } from "./";
import styled from "@emotion/styled";

export const CarDataWrapper = ({ children }) => {
  const { selectedCar } = useSelector((state) => state.cars);
  const { theme } = useSelector((state) => state.theme);

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
          <Link className="breadcumbs" color="inherit" to="/">
            Coches de Ocasión
          </Link>
          <Link
            className="breadcumbs"
            color="inherit"
            to="/coches-segunda-mano"
          >
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
          mb: 3,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "77%",
            backgroundColor: theme.bgSecondary,
            boxSizing: "border-box",
            p: 3,
          }}
        >
          {children}
        </Paper>
        <Box
          sx={{
            width: "21%",
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
