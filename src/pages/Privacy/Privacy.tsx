
import { Button, Grid, Typography } from "@mui/material";
import { Title } from "../../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { privacy } from "../../helpers/data";

const Privacy = () => {

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
      <Title text="Privacy policy" />
      <Grid xs={6} item>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.title}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.description}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part1}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part1text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part2}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part2text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part3}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part3text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part4}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part4text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part5}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part5text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part6}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part6text}
        </Typography>
        <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
          {privacy.part7}
        </Typography>
        <Typography sx={{ marginBottom: "35px" }}>
          {privacy.part7text}
        </Typography>
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

export default Privacy;
