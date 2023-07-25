import { Grid, Typography } from "@mui/material";
import { privacy } from "../../helpers/data";

const PrivacyData = () => {
  return (
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
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part1text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part2}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part2text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part3}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part3text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part4}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part4text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part5}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part5text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part6}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part6text}</Typography>
      <Typography sx={{ margin: "10px 0", fontWeight: "bold" }}>
        {privacy.part7}
      </Typography>
      <Typography sx={{ marginBottom: "35px" }}>{privacy.part7text}</Typography>
    </Grid>
  );
};

export default PrivacyData;
