import { useEffect, useState } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import avatarIcon from "../../assets/Anonym.jpg";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FriendType } from "../../types/types";
import friends from "../../assets/category-icon9.png";

const Friends = () => {
  const [searchFriend, setSearchFriend] = useState<string>("");
  const [foundFriend, setFoundFriend] = useState<FriendType[]>([]);
  const [friendList, setFriendList] = useState<FriendType[] | []>([]);
  const [myFriends] = useState(["Maros", "Fero"]);

  const fetchFriends = async () => {
    if (searchFriend.trim() === "") {
      setFoundFriend([]);
      return;
    }

    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${searchFriend}`
    );
    if (response) {
      const filteredFriends = response.data.users.filter(
        (friend: FriendType) => {
          const friendName = friend.firstName.toLowerCase();
          const searchQuery = searchFriend.toLowerCase();
          return friendName.includes(searchQuery);
        }
      );
      setFoundFriend(filteredFriends);
    }
  };

  const handleAddFriend = (friend: FriendType) => {
    if (friend && !friendList.find((f: FriendType) => f.id === friend.id)) {
      setFriendList((prevFriendList: FriendType[] | []) => [
        ...prevFriendList,
        friend,
      ]);
    }
  };

  const handleDeleteFriend = (id: number) => {
    const filteredFriends = friendList.filter(
      (friend: FriendType) => friend.id !== id
    );
    if (filteredFriends) {
      setFriendList(filteredFriends);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, [searchFriend]);



  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >

      <Grid
        item
        container
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h6">My Friends</Typography>
          {myFriends.map((oneFriend) => (
            <List dense key={oneFriend}>
              <ListItem key={oneFriend} disablePadding>
                <ListItemAvatar>
                  <Avatar alt={oneFriend} src={avatarIcon} />
                </ListItemAvatar>
                <ListItemText id={oneFriend} primary={oneFriend} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                  }}
                >
                  <Button>
                    <EmailOutlinedIcon />
                  </Button>
                  <Button color="secondary">
                    <SportsEsportsOutlinedIcon />
                  </Button>
                  <Button color="error">
                    <RemoveCircleOutlineOutlinedIcon />
                  </Button>
                </Box>
              </ListItem>
            </List>
          ))}
        </Box>
        <img
          src={friends}
          alt="friends_image"
          style={{
            width: 200,
            height: 300,
          }}
        />
      </Grid>




      <Grid
        item
        container
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        sx={{alignItems: {xs:"center", sm: "flex-start"}}}
        gap="55px"
      >
        <Box
          display="flex"
          flexDirection="column"
        >
          <TextField
            type="text"
            label="Search friend"
            value={searchFriend}
            onChange={(e) => setSearchFriend(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{  height: "200px", overflowY: "auto" }}
          >
            {foundFriend.map((friend: FriendType) => (
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
                key={friend.id}
              >
                <Typography>{friend.firstName}</Typography>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => handleAddFriend(friend)}
                  disabled={Boolean(
                    friendList.find((f: FriendType) => f.id === friend.id)
                  )}
                >
                  +
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h6">Sent Requests</Typography>
          {friendList.map((oneFriend: FriendType) => (
            <List dense key={oneFriend.id}>
              <ListItem disablePadding>
                <ListItemAvatar>
                  <Avatar alt={oneFriend.firstName} src={avatarIcon} />
                </ListItemAvatar>
                <ListItemText primary={oneFriend.firstName} />
                <Button
                  onClick={() => handleDeleteFriend(oneFriend.id)}
                  color="error"
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </Button>
              </ListItem>
            </List>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Friends;
