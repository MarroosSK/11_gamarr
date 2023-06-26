import { Box, Typography } from "@mui/material";

const TitleButton = ({ text, subtext }: { text: string; subtext: string }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "50px",
          fontWeight: "bold",
          fontSize: "33px",
        }}
      >
        {text}
      </Typography>
      <Typography sx={{ marginBottom: "50px" }}>{subtext}</Typography>
    </Box>
  );
};

export default TitleButton;
