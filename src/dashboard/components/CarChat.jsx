import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";

export const CarChat = () => {
  const { theme, type } = useSelector((state) => state.theme);

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          backgroundColor: theme.bgSecondary,
          width: "100%",
          height: "fit-content",
          maxHeight: 647,
          p: 3,
          mb: 2,
          borderRadius: 1.3,
          boxSizing: "border-box",
          // border: `1px solid ${theme.borderColor}`,
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
            sx={{
              backgroundColor: type === "light" ? theme.bgPrimary : "#1a1a1a",
            }}
            inputProps={{
              style: { fontSize: 14 },
            }}
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Nombre"
            size="small"
            sx={{
              backgroundColor: type === "light" ? theme.bgPrimary : "#1a1a1a",
            }}
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Email"
            size="small"
            sx={{
              backgroundColor: type === "light" ? theme.bgPrimary : "#1a1a1a",
            }}
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Teléfono"
            size="small"
            sx={{
              backgroundColor: type === "light" ? theme.bgPrimary : "#1a1a1a",
            }}
          />
          <Button
            variant="text"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "rgba(36, 98, 253, 0.28)",
              border: "1px solid rgba(36, 98, 253)",
              // color: "#eeee",
            }}
          >
            CONTACTAME
          </Button>
        </Stack>
      </Paper>
      <Paper
        elevation={1}
        sx={{
          backgroundColor: theme.bgSecondary,
          width: "100%",
          height: "fit-content",
          p: 2,
          mb: 2,
          borderRadius: 1.3,
          boxSizing: "border-box",
          position: "sticky",
          // border: `1px solid ${theme.borderColor}`,
        }}
      >
        <Button variant="contained" fullWidth>
          CHAT EN VIVO
          <SendOutlinedIcon fontSize="small" sx={{ ml: 2 }} />
        </Button>
      </Paper>
      <Stack direction="row" spacing={1}>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: theme.bgSecondary,
            borderRadius: 1.3,
            // border: `1px solid ${theme.borderColor}`,
          }}
        >
          <IconButton>
            <StarBorderIcon />
          </IconButton>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: theme.bgSecondary,
            borderRadius: 1.3,
            // border: `1px solid ${theme.borderColor}`,
          }}
        >
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: theme.bgSecondary,
            borderRadius: 1.3,
            // border: `1px solid ${theme.borderColor}`,
          }}
        >
          <IconButton>
            <FlagIcon />
          </IconButton>
        </Paper>
      </Stack>
    </>
  );
};
