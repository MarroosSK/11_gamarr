import { Grid } from "@mui/material";
import { Title } from "../../components";

import { BackButton, BackgroundSpot, PrivacyData } from "..";

const Privacy = () => {
  return (
    <Grid
      container
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      marginTop="120px"
      marginBottom="50px"
    >
      {/* background spot */}
      <BackgroundSpot />

      {/* TITLE */}
      <Title text="Privacy policy" />

      {/* PRIVACY */}
      <PrivacyData />

      {/* back to HOME */}
      <BackButton />
    </Grid>
  );
};

export default Privacy;
