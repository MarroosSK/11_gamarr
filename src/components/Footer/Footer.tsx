import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import logoPic from "../../assets/gamar2.png";
import { NavLink } from "react-router-dom";
import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import { motion } from "framer-motion";

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
      <Grid item xs={12} md={6} textAlign="center">
        <img src={logoPic} style={{ width: "200px" }} alt="Logo" />
        
        <Typography fontSize="12px" fontStyle="italic">
          every game a click away
        </Typography>
      </Grid>
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
      <Grid
        item
        xs={12}
        md={4}
        textAlign={"center"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        marginTop="40px"
      >
        <Stack direction="row" spacing={2}>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <IconButton sx={{ background: "rgba(24,119,242,.2)" }}>
              <img src={fbIcon} alt="fb_icon" width={20} />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <IconButton sx={{ background: "rgba(0,172,237,.2)" }}>
              <img src={twitterIcon} alt="twitter_icon" width={20} />
            </IconButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <IconButton sx={{ background: "rgba(189,138,119,.2)" }}>
              <img src={instagramIcon} alt="insta_icon" width={20} />
            </IconButton>
          </motion.div>
        </Stack>
        <Typography fontSize="10px" marginBottom="10px">
          @2023, All Rights Reserved
        </Typography>
      </Grid>
      <Divider style={{ width: "100%" }}>created by marroos</Divider>
    </Grid>
  );
};

export default Footer;
