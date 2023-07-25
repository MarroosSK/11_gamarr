import { Grid, Typography } from "@mui/material";
import { terms } from "../../helpers/data";

const TermsData = () => {
  return (
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
  );
};

export default TermsData;
