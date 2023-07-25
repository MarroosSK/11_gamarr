import { Box, Stack, Typography } from "@mui/material";
import sad from "../../assets/sad.png";
import { BackButton } from "..";

const ErrorPage = () => {
  return (
    <Stack
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={sad} width={"150px"} style={{ opacity: 0.5 }} />
      <Box>
        <Typography color="text.secondary">
          OOOps! This game has not been developed yet! Come back{" "}
        </Typography>
        <BackButton />
      </Box>
    </Stack>
  );
};

export default ErrorPage;
