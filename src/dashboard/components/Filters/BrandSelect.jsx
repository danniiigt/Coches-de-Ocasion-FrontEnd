import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { AccordionWrapper } from "..";
import { useFetch } from "../../../hooks/useFetch";

export const BrandSelect = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const { data, isLoading, hasError } = useFetch(
    `${import.meta.env.VITE_RESTSERVER_URL}/api/brands`
  );

  const handleClick = (e) => {
    setOpenSelect(!openSelect);
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedBrand(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <AccordionWrapper
      title={
        selectedBrand.length === 0
          ? "Marcas"
          : `Marcas - ${selectedBrand.length} Seleccionadas`
      }
      noPadding
      handleClick={handleClick}
      expanded={openSelect}
    >
      <Select
        sx={{
          //   backgroundColor: "white",
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          outline: "none",
        }}
        value={selectedBrand}
        fullWidth
        color="primary"
        open={openSelect}
        multiple
        onChange={handleSelect}
        onClick={handleClick}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
      >
        <MenuItem value={1} disabled>
          Selecciona una marca
        </MenuItem>
        {!isLoading &&
          data.brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
      </Select>
    </AccordionWrapper>
  );
};
