
import { Button, Grid, Typography } from "@mui/material";
import { Title } from "../../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { terms } from "../../helpers/data";

const TermsOfUse = () => {

  return (
    <Grid
      container
      xs={12}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      marginTop="95px"
      marginBottom="50px"
    >
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 200,
          width: 200,
          height: 300,
          background: "linear-gradient(to right, green, black)",
          borderRadius: "85%",
          filter: "blur(200px)",
          zIndex: -1,
        }}
      />
      <Title text="Terms of use" />
      <Grid xs={6} item>
        <Typography sx={{ margin: "35px 0", fontWeight: "bold" }}>
          {terms.title}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part1}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part1text}</Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part2}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part2text}</Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part3}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part3text}</Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part4}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part4text}</Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part5}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part5text}</Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {terms.part6}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>{terms.part6text}</Typography>
      </Grid>
      <NavLink to={"/"} style={{ alignSelf: "center", margin: "50px" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          home
        </Button>
      </NavLink>
    </Grid>
  );
};

export default TermsOfUse;
