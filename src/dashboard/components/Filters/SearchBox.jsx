import { Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../store/cars";
import { useState } from "react";

export const SearchBox = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("")
  const { theme } = useSelector((state) => state.theme);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue !== "") {
      dispatch(setSearch(searchValue))
    }
  }

  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 56,
          position: { xs: "", md: "sticky" },
          top: 99,
          width: "100%",
        }}
      >
        <form onSubmit={handleSearch} className="formSearch">
          <TextField
            fullWidth
            color="primary"
            autoComplete="off"
            value={searchValue}
            onChange={handleChange}
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
                  onClick={handleSearch}
                  sx={{
                    ml: 1.5,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                />
              ),
            }}
          />
        </form>

      </Stack>
    </>
  );
};
