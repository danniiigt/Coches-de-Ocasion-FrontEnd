import { Box, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const CarsHeader = ({ brandName, totalCars }) => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "space-between",
          position: "sticky",
          alignItems: "center",
          backgroundColor: "#f3f3f3",
          zIndex: 100,
          top: 0,
          paddingTop: 1,
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "white",
            p: "12px",
            // borderRadius: 3,
            // border: "1px solid #dddddded",
            color: "#303030",
          }}
        >
          <Typography variant="h6" fontWeight={400}>
            {brandName
              ? `${totalCars} ofertas de ${brandName}`
              : "37.289 Coches de segunda mano"}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* <IconButton
              sx={{
                mr: 1,
                color: "#535353ed",
                "&:hover": {
                  backgroundColor: "#eeeeee39",
                },
              }}
            >
              <SearchIcon />
            </IconButton> */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                p: 1,
                borderRadius: 3,

                "&:hover": {
                  backgroundColor: "#eeeeee90",
                },
              }}
            >
              <Typography variant="h7" mr={1} color="inherit">
                Coches más recientes
              </Typography>
              <ArrowDropDownIcon color="inherit" sx={{ color: "#505050ed" }} />
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            backgroundColor: "#f3f3f3",
            height: 10,
            width: "100%",
            zIndex: 100,
            top: 64,
            position: "sticky",
          }}
        ></Box>
      </Box>
    </>
  );
};
