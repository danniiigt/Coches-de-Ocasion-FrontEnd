import { Box, Stack, Typography } from "@mui/material";
import { format } from "currency-formatter";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

export const CarData = () => {
  const { selectedCar: car } = useSelector((state) => state.cars);
  const { theme } = useSelector((state) => state.theme);
  console.log(car);

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h5" noWrap>
            {car.title}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} sx={{ ml: 3 }}>
            {format(car.price, { code: "EUR" })}
          </Typography>
        </Stack>
        <Box
          sx={{
            backgroundColor: theme.bgPrimary,
            p: "1px 15px 0",
            borderRadius: 3,
            border: `1px solid ${theme.borderColor}`,
          }}
        >
          <Typography variant="body1">
            <ReactMarkdown>{car.description}</ReactMarkdown>
          </Typography>
        </Box>
      </Box>

      <p></p>
    </>
  );
};

('Autos Roso es una empresa de compraventa de vehículos con una experiencia de más de 10 años en el sector automovilístico.\n\nActualmente nos puedes visitar en:\nGran Canaria > El Goro -c/ Prior Mateo Tello, 20. \nGran Canaria > CC La Ballena -Carretera del Norte, 112. \nLanzarote > Arrecife -c/ Manolo Millares, 103. \nTenerife > Los Majuelos - Avda. El Paso Edificios Multiusos, local 20.\n\nDisfruta de las ventajas que ofrecemos:\n- INTERÉS INIGUALABLE 4,99%.\n- PAGO AL CONTADO = PAGO FINANCIADO ¡Sin trucos!.\n- ENVÍOS GRATUITOS y TALLERES OFICIALES en todas las Islas Canarias.\n- PLAN RENOVE con el que le damos el valor que merece a tu coche para descontarlo de tu próxima adquisición.\n- GARANTÍA y tranquilidad de 1 año, en todos nuestros vehículos.\n\nLas fotos son reales y corresponde con el vehículo anunciado salvo "error tipográfico o de transcripción".');
