import { IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";

export const SearchBox = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 56,
          position: "sticky",
          top: 85,
        }}
      >
        <TextField
          fullWidth
          color="primary"
          autoComplete="off"
          InputProps={{
            placeholder: "¿Que coche buscas?",
            style: {
              backgroundColor: "white",
              borderRadius: "6px 0 0 6px",
              color: "#525252",
            },
            startAdornment: (
              <DirectionsCarIcon sx={{ mr: 1, color: "primary.main" }} />
            ),
          }}
        />
        <SendIcon
          sx={{
            backgroundColor: "primary.main",
            height: "100%",
            borderRadius: "0 6px 6px 0",
            padding: "0 10px",
            color: "#eeee",
            cursor: "pointer",
          }}
        />
      </Stack>
    </>
  );
};
