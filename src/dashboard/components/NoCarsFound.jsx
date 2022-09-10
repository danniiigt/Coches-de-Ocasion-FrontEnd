import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";
import { useDispatch } from "react-redux";
import { resetFilterQuery } from "../../store/cars";

export const NoCarsFound = () => {
  const dispatch = useDispatch();

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
        }}
      >
        <Box sx={{ mr: 3 }}>
          <ErrorIcon color="error" sx={{ fontSize: 100 }} />
        </Box>
        <Box>
          <Typography variant="h5" align="center" fontWeight={200}>
            No tenemos ofertas para los filtros que has puesto
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
