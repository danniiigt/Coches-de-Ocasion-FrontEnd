import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export const CarChat = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <Box
        elevation={2}
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "fit-content",
          maxHeight: 647,
          p: 3,
          mb: 2,
          borderRadius: 1.3,
          boxSizing: "border-box",
          border: `1px solid ${theme.borderColor}`,
        }}
      >
        <Stack spacing={1.3}>
          <TextField
            id="outlined-multiline-static"
            //   label="Multiline"
            multiline
            rows={4}
            fullWidth
            placeholder="Estoy interesado en el vehiculo..."
            inputProps={{ style: { fontSize: 14 } }}
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Nombre"
            size="small"
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Email"
            size="small"
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Teléfono"
            size="small"
          />
          <Button variant="outlined" size="small" fullWidth>
            CONTACTAME
          </Button>
        </Stack>
      </Box>
      <Box
        elevation={2}
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "fit-content",
          maxHeight: 647,
          top: 1200,
          p: 3,
          borderRadius: 1.3,
          boxSizing: "border-box",
          position: "sticky",
          border: `1px solid ${theme.borderColor}`,
        }}
      >
        <TextField
          id="outlined-multiline-static"
          //   label="Multiline"
          multiline
          rows={4}
          fullWidth
          placeholder="¡Hola! Me gustaría saber más sobre este coche..."
          inputProps={{ style: { fontSize: 14 } }}
        />
        <Button variant="contained" fullWidth>
          CHAT EN VIVO
          <SendOutlinedIcon fontSize="small" sx={{ ml: 2 }} />
        </Button>
      </Box>
    </>
  );
};
