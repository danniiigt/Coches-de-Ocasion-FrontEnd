import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  paddingTop: 10,
  minHeight: 55,

  "&:not(:last-child)": {
    borderBottom: 0,
  },

  "&:first-of-type": {
    borderRadius: "8px 8px 0 0",
  },

  "&:before": {
    display: "none",
  },
}));

export const AccordionWrapper = ({
  children,
  title,
  noPadding,
  handleClick,
  expanded,
  buttonStyle,
}) => {
  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        onClick={handleClick}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          marginTop: "auto",
          marginRight: "auto",
          "&:hover": {
            p: {
              color: "#2462FD",
            },
          },
        }}
      >
        <Typography sx={{ width: "fit-content" }} noWrap>
          {title ? title : "Titulo"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ backgroundColor: "#eeee", padding: noPadding ? 0 : 3 }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
