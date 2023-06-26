import { Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        margin: "50px",
        fontSize: "33px",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
