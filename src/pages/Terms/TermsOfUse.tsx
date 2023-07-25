import { Grid } from "@mui/material";
import { Title } from "../../components";
import { BackButton, BackgroundSpot, TermsData } from "..";

const TermsOfUse = () => {
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

      {/* title */}
      <Title text="Terms of use" />

      {/* terms */}
      <TermsData />

      {/* back to home */}
      <BackButton />
    </Grid>
  );
};

export default TermsOfUse;
