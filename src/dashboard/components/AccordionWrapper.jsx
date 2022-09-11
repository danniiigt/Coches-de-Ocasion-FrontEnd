import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

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
  const { theme } = useSelector((state) => state.theme);

  return (
    <Accordion
      expanded={expanded}
      sx={{
        backgroundColor: theme.bgSecondary,
        border: `1px solid ${theme.borderColor}`,
      }}
    >
      <AccordionSummary
        onClick={handleClick}
        expandIcon={<ExpandMoreIcon sx={{ color: theme.textPrimary }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          marginTop: "auto",
          marginRight: "auto",
          backgroundColor: theme.bgSecondary,
          color: theme.textPrimary,
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
        sx={{
          backgroundColor: theme.bgPrimary,
          padding: noPadding ? 0 : 3,
          color: theme.textPrimary,
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
