import { Grid, IconButton, Stack, Typography } from "@mui/material";
import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import { motion } from "framer-motion";

const FooterLinks = () => {
  return (
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
  );
};

export default FooterLinks;
