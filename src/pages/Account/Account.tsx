import { useState, useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Title } from "../../components";
import { NavLink } from "react-router-dom";
import profilePic from "../../assets/Anonym.jpg";
import { accountData } from "../../helpers/data";
import { LoginContext } from "../../context/LoginContext";
import { MyGamesContext } from "../../context/MyGamesContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Friends, Statistics } from "..";
import { MyGameType } from "../../types/types";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";

const Account = () => {
  const [activeLink, setActiveLink] = useState("wishlist");
  const context = useContext(LoginContext);
  const contextGames = useContext(MyGamesContext);

  const isGameOnWishlist = (id: string) => {
    return contextGames.myGames.some((game) => game.id === id);
  };

  const handleWishList = (item: MyGameType) => {
    contextGames.setMyGames([...contextGames.myGames, item]);
  };
  const handleRemoveFromWishList = (id: string) => {
    const filteredList = contextGames.myGames.filter((game) => game.id !== id);
    if(filteredList){
      contextGames.setMyGames(filteredList);
    }
  };

  //logout
  const logout = () => {
    context.setIsLoggedIn(false);
    context.setLoginForm({ nickname: "", password: "" });
    localStorage.removeItem("nickname");
    localStorage.removeItem("password");
    //toast
    toast("Hope to see you soon again", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "info",
    });
  };



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
      <Title text="My Account" />
      <Grid
        item
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "200px" },
          }}
        >
          <Box display="flex" flexDirection="column">
            <Avatar
              alt="avatar_pic"
              src={profilePic}
              sx={{ width: { xs: 150, sm: 220 }, height: { xs: 120, sm: 180 } }}
            />
            <NavLink to={"/"} style={{ alignSelf: "center", margin: "10px" }}>
              <Button
                variant="contained"
                color="error"
                endIcon={<LogoutIcon />}
                onClick={() => logout()}
              >
                logout
              </Button>
            </NavLink>
          </Box>
          <List>
            <ListItem>
              <ListItemText
                primary="IGN"
                secondary={context?.loginForm.nickname}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Account since"
                secondary={accountData.accountCreated}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="E-mail" secondary={accountData.email} />
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item>
        <Box
          display="flex"
          margin="20px"
          justifyContent="flex-start"
          alignItems="center"
          gap="10px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box
            onClick={() => setActiveLink("stats")}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              style={{ color: activeLink === "stats" ? "#ff5f10" : "" }}
            >
              Stats
            </Typography>
          </Box>
          <Box
            onClick={() => setActiveLink("friends")}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              style={{ color: activeLink === "friends" ? "#ff5f10" : "" }}
            >
              Friends
            </Typography>
          </Box>
          <Box
            onClick={() => setActiveLink("wishlist")}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              style={{ color: activeLink === "wishlist" ? "#ff5f10" : "" }}
            >
              Wishlist
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* category */}
      {activeLink === "wishlist" && (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          gap={2}
          marginBottom="50px"
        >
          {contextGames.myGames.map((game) => (
            <Card
              sx={{ width: { xs: 250, sm: 350, md: 300 }, boxShadow: "none" }}
              key={game.id}
            >
              <CardActionArea>
                <NavLink to={`/store/${game.id}`}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={game.picture}
                    alt={game.title}
                  />
                </NavLink>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontSize="12px"
                      component="div"
                      color="primary"
                    >
                      {game.title}
                    </Typography>
                    {game.id && isGameOnWishlist(game.id) ? (
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  centerRipple
                  onClick={() => game.id && handleRemoveFromWishList(game.id)}
                >
                  <FavoriteIcon />
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  centerRipple
                  onClick={() => handleWishList(game)}
                >
                  <FavoriteBorderOutlinedIcon />
                </Button>
              )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      )}

      {/* category */}
      {activeLink === "friends" && (
        <Grid item>
          <Friends />
        </Grid>
      )}

      {/* category */}
      {activeLink === "stats" && (
        <Grid item>
          <Statistics />
        </Grid>
      )}
    </Grid>
  );
};

export default Account;
