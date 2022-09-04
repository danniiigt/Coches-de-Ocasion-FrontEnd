import { Checkbox, FormControlLabel } from "@mui/material";
import { AccordionWrapper } from "..";

export const GearboxSelect = () => {
  return (
    <AccordionWrapper title="Cambio">
      <FormControlLabel control={<Checkbox />} label="Manual" />
      <FormControlLabel control={<Checkbox />} label="Automatico" />
    </AccordionWrapper>
  );
};
