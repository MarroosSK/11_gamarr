import { useState, useContext } from "react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { Title } from "../../components";
import { NavLink } from "react-router-dom";
import profilePic from "../../assets/Anonym.jpg";
import { accountData } from "../../helpers/data";
import { LoginContext } from "../../context/LoginContext";
import { MyGamesContext } from "../../context/MyGamesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BackgroundSpot, Friends, Statistics } from "..";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";

const Account = () => {
  const [activeLink, setActiveLink] = useState("wishlist");
  const context = useContext(LoginContext);
  const contextGames = useContext(MyGamesContext);

  const isGameOnWishlist = (id: string) => {
    return contextGames.myGames.some((game) => game.id === id);
  };

  const handleRemoveFromWishList = (id: string) => {
    const filteredList = contextGames.myGames.filter((game) => game.id !== id);
    if (filteredList) {
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
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      marginTop="120px"
      marginBottom="50px"
    >
      {/* background spot */}
      <BackgroundSpot />
      {/* TITLE */}
      <Title text="My Account" />
      {/* PROFILE */}
      <Grid
        item
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
      >
        {/* PROFILE DETAILS */}
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
              <IconButton onClick={() => logout()}>
                <LogoutIcon />
              </IconButton>
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

      {/* OPTIONS */}
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

      {/* category WISHLIST */}
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
                    {game.id && isGameOnWishlist(game.id) && (
                      <>
                        <IconButton
                          size="small"
                          onClick={() =>
                            game.id && handleRemoveFromWishList(game.id)
                          }
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </>
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      )}

      {/* category FRIENDS */}
      {activeLink === "friends" && (
        <Grid item>
          <Friends />
        </Grid>
      )}

      {/* category STATS */}
      {activeLink === "stats" && (
        <Grid item>
          <Statistics />
        </Grid>
      )}
    </Grid>
  );
};

export default Account;
