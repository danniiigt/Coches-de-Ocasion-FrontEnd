import { Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useSelector } from "react-redux";

export const SearchBox = () => {
  const { theme } = useSelector((state) => state.theme);

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
              backgroundColor: theme.bgSecondary,
              borderRadius: "6px",
              color: theme.textPrimary,
              fontWeight: 300,
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
