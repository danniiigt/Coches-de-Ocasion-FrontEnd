import {
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { SearchWrapper } from "./SearchWrapper";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StyleIcon from "@mui/icons-material/Style";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/cars";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: dataBrands, isLoading: isLoadingBrands } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/brands`
  );
  const { theme, type } = useSelector((state) => state.theme);
  const [brand, setBrand] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSelectBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      dispatch(setSearch(searchValue));
      navigate(`/coches-segunda-mano`);
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && searchValue !== "") {
      dispatch(setSearch(searchValue));
      navigate(`/coches-segunda-mano`);
    }
  };

  return (
    <>
      <SearchWrapper>
        <form action="" onSubmit={handleSearch}>
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
              autoComplete="off"
              value={searchValue}
              onChange={handleChange}
              onKeyDownCapture={(e) => handleSubmit(e)}
              InputProps={{
                placeholder: "¿Que coche buscas?",
                style: {
                  backgroundColor: "white",
                  borderRadius: "6px 0 0 6px",
                  color: type === "dark" && theme.bgPrimary,
                  border: type === "dark" && `1px solid #616161`,
                  height: 58,
                },
                startAdornment: (
                  <DirectionsCarIcon sx={{ mr: 2, color: "primary.main" }} />
                ),
              }}
            />
            <Select
              value={brand}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                backgroundColor: "white",
                width: "45%",
                borderRadius: 0,
                color: type === "dark" && theme.bgPrimary,
                border: type === "dark" && `1px solid #616161`,
                boxSizing: "border-box",
              }}
              startAdornment={
                <StyleIcon sx={{ mr: 2, color: "primary.main" }} />
              }
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
                height: 58,
                width: 58,
                borderRadius: 0,
                backgroundColor: "white",
                border:
                  type === "dark" ? `1px solid #616161` : "1px solid #b4b4b4ed",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Tooltip title="Filtros">
                <FilterListIcon color="primary" />
              </Tooltip>
            </IconButton>
            <IconButton
              onClick={handleSearch}
              sx={{
                height: 58,
                width: 58,
                borderRadius: 3,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: "white",
                border:
                  type === "dark" ? `1px solid #616161` : "1px solid #b4b4b4ed",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Tooltip title="Buscar">
                <SearchIcon color="primary" />
              </Tooltip>
            </IconButton>
          </Stack>
        </form>
      </SearchWrapper>
    </>
  );
};
