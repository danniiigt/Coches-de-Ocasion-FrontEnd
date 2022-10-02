import { Box, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { useEffect } from "react";

export const CarCities = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Box sx={{ width: "100%", backgroundColor: theme.bgSecondary }}>
      <Box
        sx={{
          width: "93%",
          maxWidth: 1300,
          marginLeft: "auto",
          marginRight: "auto",
          mt: 10,
          p: "30px 0",
        }}
      >
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Busquedas frecuentes
        </Typography>
        <Grid container justifyContent="center" columnSpacing={3}>
          <Grid item>
            <Box
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 1.5,
                cursor: "pointer",
                border: `1px solid ${theme.borderColor}`,

                "&:hover": {
                  transition: "all 0.5s ease",
                  backgroundColor: theme.bgPrimary,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <LocalOfferOutlinedIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="body1">Coches</Typography>
                <Typography variant="body1" color="primary" fontWeight={500}>
                  Económicos
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 1.5,
                cursor: "pointer",
                border: `1px solid ${theme.borderColor}`,

                "&:hover": {
                  transition: "all 0.5s ease",
                  backgroundColor: theme.bgPrimary,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <DirectionsCarFilledOutlinedIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="body1">Coches</Typography>
                <Typography variant="body1" color="primary" fontWeight={500}>
                  Kilómetro 0
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 1.5,
                cursor: "pointer",
                border: `1px solid ${theme.borderColor}`,

                "&:hover": {
                  transition: "all 0.5s ease",
                  backgroundColor: theme.bgPrimary,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <WorkspacePremiumOutlinedIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="body1">Coches</Typography>
                <Typography variant="body1" color="primary" fontWeight={500}>
                  Premium
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              elevation={0}
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 1.5,
                cursor: "pointer",
                border: `1px solid ${theme.borderColor}`,

                "&:hover": {
                  transition: "all 0.5s ease",
                  backgroundColor: theme.bgPrimary,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <LocalOfferOutlinedIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="body1">Coches</Typography>
                <Typography variant="body1" color="primary" fontWeight={500}>
                  Destacados
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
