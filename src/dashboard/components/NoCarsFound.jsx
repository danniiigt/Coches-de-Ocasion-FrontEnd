import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterQuery } from "../../store/cars";

export const NoCarsFound = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleResetFilterQuery = () => {
    dispatch(resetFilterQuery());
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.bgSecondary,
          border: `1px solid ${theme.borderColor}`,
          borderRadius: 3,
        }}
      >
        <Box sx={{ mr: 3 }}>
          <ErrorIcon color="error" sx={{ fontSize: 100, fontSize: 110 }} />
        </Box>
        <Box>
          <Typography variant="h5" align="center" fontWeight={200}>
            No se han encontrado resultados para tu busqueda
          </Typography>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 1.5 }}
            size="small"
            onClick={handleResetFilterQuery}
          >
            RESTABLECER FILTROS
          </Button>
        </Box>
      </Box>
    </>
  );
};
