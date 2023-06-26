import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import sad from "../../assets/sad.png";


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
        <Link to="/" color="green">
          <Typography sx={{ textDecoration: "underline" }}>home</Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
