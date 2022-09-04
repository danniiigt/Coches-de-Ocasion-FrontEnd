import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { AccordionWrapper } from "../";
import provincias from "../../../assets/provincias.json";

export const ProvinceSelect = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState([]);

  const handleClick = (e) => {
    setOpenSelect(!openSelect);
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedProvince(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <AccordionWrapper
      title={
        selectedProvince.length === 0
          ? "Provincias"
          : `Provincias - ${selectedProvince.length} Seleccionadas`
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
        value={selectedProvince}
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
          Selecciona una provincia
        </MenuItem>
        {provincias.map((provincia) => (
          <MenuItem key={provincia.id} value={provincia.nm}>
            {provincia.nm}
          </MenuItem>
        ))}
      </Select>
    </AccordionWrapper>
  );
};
