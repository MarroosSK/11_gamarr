import { FormEvent, useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  TextField,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Title } from "../../components";
import { LoginContext } from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import loginPic from "../../assets/codWall.jpg";
import { toast } from "react-toastify";

const Login = () => {
  const context = useContext(LoginContext);
  const navigate = useNavigate();
  const [enableRegister, setEnableRegister] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      context.loginForm.nickname.length !== 0 &&
      context.loginForm.password.length !== 0
    ) {
      context.setIsLoggedIn(true);
      localStorage.setItem("nickname", context.loginForm.nickname);
      localStorage.setItem("password", context.loginForm.password);
      navigate("/");
      toast("Welcome to Gamer store", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type: "success",
      });
    }
  };

  const handleSkip = () =>{
    context.setIsLoggedIn(true);
    localStorage.setItem("nickname", "demo");
    localStorage.setItem("password", "demo");
    navigate("/");
    toast("Welcome to Gamer store", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
    });
  }

  const loginForm = (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      margin="20px"
      sx={{
        boxShadow: "none",
        backgroundColor: "rgba(39, 39, 39, 0.2)",
        backdropFilter: "blur(25px)",
        borderRadius: "25px",
      }}
    >
      <Title text="Login" />
      <Button variant="contained" color="success" sx={{margin: "20px"}} onClick={() => handleSkip()}>Skip login</Button>
      <Box marginBottom="10px">
        <Alert severity="info">Type anything...</Alert>
      </Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "400px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          label="Nickname"
          variant="outlined"
          color="primary"
          value={context.loginForm.nickname}
          onChange={(e) =>
            context.setLoginForm((prevLoginForm) => ({
              ...prevLoginForm,
              nickname: e.target.value,
            }))
          }
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          color="primary"
          value={context.loginForm.password}
          onChange={(e) =>
            context.setLoginForm((prevLoginForm) => ({
              ...prevLoginForm,
              password: e.target.value,
            }))
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
      <Link to={"#"} onClick={() => setEnableRegister(true)}>
        <Typography
          marginTop="10px"
          sx={{ cursor: "pointer", ":hover": { color: "#44d62c" } }}
        >
          No account yet?
        </Typography>
      </Link>
    </Box>
  );

  const registerForm = (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      margin="20px"
      sx={{
        boxShadow: "none",
        backgroundColor: "rgba(39, 39, 39, 0.2)",
        backdropFilter: "blur(25px)",
        borderRadius: "25px",
      }}
    >
      <Title text="Register" />
      <Button variant="contained" color="success" sx={{margin: "20px"}} onClick={() => handleSkip()}>Skip register</Button>
      <Box marginBottom="10px">
        <Alert severity="info">Type anything...</Alert>
      </Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "400px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          label="Nickname"
          variant="outlined"
          color="primary"
          value={context.loginForm.nickname}
          onChange={(e) =>
            context.setLoginForm((prevLoginForm) => ({
              ...prevLoginForm,
              nickname: e.target.value,
            }))
          }
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          color="primary"
          value={context.loginForm.password}
          onChange={(e) =>
            context.setLoginForm((prevLoginForm) => ({
              ...prevLoginForm,
              password: e.target.value,
            }))
          }
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Box onClick={() => setEnableRegister(false)}>
        <Typography
          marginTop="10px"
          sx={{ cursor: "pointer", ":hover": { color: "#44d62c" } }}
        >
          back to login
        </Typography>
      </Box>
    </Box>
  );

  // Uloženie stavu prihlásenia do storage pri zmene
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(context.isLoggedIn));
  }, [context.isLoggedIn]);

  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        backgroundImage: { xs: `url(${loginPic})`, sm: "none" },
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
        height: "100vh",
      }}
    >
      {enableRegister ? registerForm : loginForm}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          backgroundImage: `url(${loginPic})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100%",
          height: "100vh",
        }}
      ></Box>
    </Stack>
  );
};

export default Login;
