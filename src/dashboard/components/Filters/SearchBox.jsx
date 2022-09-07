import { Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
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
          top: 99,
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
              borderRadius: "6px",
              color: "#525252",
            },
            endAdornment: (
              <SendIcon
                sx={{
                  ml: 1.5,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              />
            ),
          }}
        />
      </Stack>
    </>
  );
};
