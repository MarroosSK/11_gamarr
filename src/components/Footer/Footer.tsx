import { Divider, Grid } from "@mui/material";
import FooterLinks from "./FooterLinks";
import FooterOptions from "./FooterOptions";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <Grid
      container
      height="305px"
      sx={{
        justifyContent: {
          xs: "center",
          sm: "space-between",
        },
        alignItems: "center",
        backgroundColor: "#101010",
      }}
    >
      {/* logo */}
      <FooterLogo />
      {/* options */}
      <FooterOptions />
      {/* links */}
      <FooterLinks />
      <Divider style={{ width: "100%" }}>created by marroos</Divider>
    </Grid>
  );
};

export default Footer;
