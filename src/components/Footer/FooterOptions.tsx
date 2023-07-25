import { Grid, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

const FooterOptions = () => {
  return (
    <Grid
      item
      xs={12}
      md={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ alignItems: { xs: "center", md: "flex-start" } }}
    >
      <NavLink to="/terms-of-use">
        <Typography fontSize="12px" sx={{ ":hover": { color: "#fff" } }}>
          Terms of Use
        </Typography>
      </NavLink>
      <NavLink to="/privacy-policy">
        <Typography fontSize="12px" sx={{ ":hover": { color: "#fff" } }}>
          Privacy of Policy
        </Typography>
      </NavLink>
      <NavLink to="/feedback">
        <Typography fontSize="12px" sx={{ ":hover": { color: "#fff" } }}>
          Contact us
        </Typography>
      </NavLink>
      <NavLink to="/faq">
        <Typography fontSize="12px" sx={{ ":hover": { color: "#fff" } }}>
          FAQ
        </Typography>
      </NavLink>
    </Grid>
  );
};

export default FooterOptions;
