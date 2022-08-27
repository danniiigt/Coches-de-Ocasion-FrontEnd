import {
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { SearchWrapper } from "./SearchWrapper";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StyleIcon from "@mui/icons-material/Style";
import { useFetch } from "../../hooks/useFetch";

export const Search = () => {
  const { data: dataBrands, isLoading: isLoadingBrands } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/brands`
  );

  const [brand, setBrand] = useState(0);

  const handleSelectBrand = (event) => {
    setBrand(event.target.value);
  };

  return (
    <>
      <SearchWrapper>
        <Stack
          direction="row"
          spacing={0}
          sx={{
            borderRadius: "5px 11px 11px 5px",
            boxShadow: "0px 0px 2px 0px #00000060",
          }}
        >
          <TextField
            fullWidth
            color="primary"
            InputProps={{
              placeholder: "¿Que coche buscas?",
              style: {
                backgroundColor: "white",
                borderRadius: "6px 0 0 6px",
                color: "#525252",
              },
              startAdornment: (
                <DirectionsCarIcon sx={{ mr: 2, color: "primary.main" }} />
              ),
            }}
          />
          <Select
            value={brand}
            sx={{
              backgroundColor: "white",
              width: "45%",
              borderRadius: 0,
              color: "#525252eb",
            }}
            startAdornment={<StyleIcon sx={{ mr: 2, color: "primary.main" }} />}
            onChange={handleSelectBrand}
          >
            <MenuItem value={0} disabled>
              Selecciona una marca
            </MenuItem>

            {!isLoadingBrands &&
              dataBrands.brands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
          </Select>
          <IconButton
            sx={{
              height: "56px",
              width: "56px",
              borderRadius: 0,
              // borderTopLeftRadius: 0,
              // borderBottomLeftRadius: 0,
              backgroundColor: "white",
              border: "1px solid #b4b4b4ed",

              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <FilterListIcon />
          </IconButton>
          <IconButton
            sx={{
              height: "56px",
              width: "56px",
              borderRadius: 3,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: "white",
              border: "1px solid #b4b4b4ed",

              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <SearchIcon color="primary" />
          </IconButton>
        </Stack>
      </SearchWrapper>
    </>
  );
};
