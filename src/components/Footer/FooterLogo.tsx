import { Grid, Typography } from "@mui/material";
import logoPic from "../../assets/gamar2.png";

const FooterLogo = () => {
  return (
    <Grid item xs={12} md={6} textAlign="center">
      <img src={logoPic} style={{ width: "200px" }} alt="Logo" />

      <Typography fontSize="12px" fontStyle="italic">
        every game a click away
      </Typography>
    </Grid>
  );
};

export default FooterLogo;
