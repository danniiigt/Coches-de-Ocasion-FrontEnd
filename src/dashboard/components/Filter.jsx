import {
  AccordionWrapper,
  FilterWrapper,
  KilometersSlider,
  PriceSlider,
  YearSlider,
  ProvinceSelect,
  GearboxSelect,
  HorsepowerSelect,
} from "./";

export const Filter = () => {
  return (
    <>
      <FilterWrapper>
        <KilometersSlider />
        <PriceSlider />
        <YearSlider />
        <ProvinceSelect />
        <GearboxSelect />
        <HorsepowerSelect />
        <AccordionWrapper title="Puertas"></AccordionWrapper>
        <AccordionWrapper title="Más"></AccordionWrapper>
      </FilterWrapper>
    </>
  );
};
