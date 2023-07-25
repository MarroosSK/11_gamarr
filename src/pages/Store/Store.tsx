import { useContext } from "react";
import {
  Box,
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { storeProductsData } from "../../helpers/data";
import { StoreSlider } from "../../components";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { MyGameType } from "../../types/types";
import { StoreContext } from "../../context/StoreContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MyGamesContext } from "../../context/MyGamesContext";
import { toast } from "react-toastify";
//lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Store = () => {
  //context
  const storeContext = useContext(StoreContext);
  const wishlistContext = useContext(MyGamesContext);

  //filter
  const filteredGames = storeProductsData.filter((game) => {
    const searchFilter = game.title
      .toLowerCase()
      .includes(storeContext.searchValue.toLowerCase());

    const genreFilter =
      storeContext.filterByGenre === "all" ||
      game.genre === storeContext.filterByGenre;

    const platformFilter =
      storeContext.filterByPlatform === "all" ||
      game.platform.includes(storeContext.filterByPlatform);

    const studioFilter =
      storeContext.filterByStudio === "all" ||
      game.publisher === storeContext.filterByStudio;

    const statusFilter =
      storeContext.filterByStatus === "all" ||
      game.status === storeContext.filterByStatus;

    return (
      searchFilter &&
      genreFilter &&
      platformFilter &&
      studioFilter &&
      statusFilter
    );
  });

  const isGameOnWishlist = (id: string) => {
    return wishlistContext.myGames.some((game) => game.id === id);
  };

  const handleWishList = (item: MyGameType) => {
    wishlistContext.setMyGames([...wishlistContext.myGames, item]);
    toast("Game added to wishlist", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "info",
    });
  };
  const handleRemoveFromWishList = (id: string) => {
    const filteredList = wishlistContext.myGames.filter(
      (game) => game.id !== id
    );
    wishlistContext.setMyGames(filteredList);
    toast("Game removed from wishlist", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "error",
    });
  };

  const { addItemToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = (item: MyGameType) => {
    addItemToCart(item);
    toast("Game added to cart", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
    });
  };

  return (
    <>
      <StoreSlider />
      {/* filters */}
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="75px 0"
        gap="20px"
      >
        <Grid item xs={7} sm={4} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="system-label">System</InputLabel>
            <Select
              labelId="system-label"
              id="system-select"
              label="System"
              value={storeContext.filterByPlatform}
              onChange={(e) => storeContext.setFilterByPlatform(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"PC"}>PC</MenuItem>
              <MenuItem value={"Xbox"}>Xbox</MenuItem>
              <MenuItem value={"PS"}>PS</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} sm={4} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="studio-label">Studio</InputLabel>
            <Select
              labelId="studio-label"
              id="studio-select"
              label="Studio"
              value={storeContext.filterByStudio}
              onChange={(e) => storeContext.setFilterByStudio(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"Ubisoft"}>Ubisoft</MenuItem>
              <MenuItem value={"Avalanche"}>Avalanche</MenuItem>
              <MenuItem value={"Tindalos"}>Tindalos</MenuItem>
              <MenuItem value={"EA"}>EA</MenuItem>
              <MenuItem value={"Dice"}>Dice</MenuItem>
              <MenuItem value={"Microsoft"}>Microsoft</MenuItem>
              <MenuItem value={"Guerilla"}>Guerilla</MenuItem>
              <MenuItem value={"Santa Monica"}>Santa Monica</MenuItem>
              <MenuItem value={"Rockstar"}>Rockstar</MenuItem>
              <MenuItem value={"Cd Project"}>Cd Project</MenuItem>
              <MenuItem value={"Void Interactive"}>Void Interactive</MenuItem>
              <MenuItem value={"Sega"}>Sega</MenuItem>
              <MenuItem value={"Visual Concepts"}>Visual Concepts</MenuItem>
              <MenuItem value={"Bandai Namco"}>Bandai Namco</MenuItem>
              <MenuItem value={"Insomnia"}>Insomnia</MenuItem>
              <MenuItem value={"Saber"}>Saber</MenuItem>
              <MenuItem value={"Cyanide"}>Cyanide</MenuItem>
              <MenuItem value={"Deep Silver"}>Deep Silver</MenuItem>
              <MenuItem value={"Capcom"}>Capcom</MenuItem>
              <MenuItem value={"NetherRealm"}>NetherRealm</MenuItem>
              <MenuItem value={"Motive"}>Motive</MenuItem>
              <MenuItem value={"Climax"}>Climax</MenuItem>
              <MenuItem value={"Mundfish"}>Mundfish</MenuItem>
              <MenuItem value={"Relic"}>Relic</MenuItem>
              <MenuItem value={"Bethesda"}>Bethesda</MenuItem>
              <MenuItem value={"Blizzard"}>Blizzard</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} sm={4} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              label="Genre"
              value={storeContext.filterByGenre}
              onChange={(e) => storeContext.setFilterByGenre(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"action"}>Action</MenuItem>
              <MenuItem value={"sport"}>Sport</MenuItem>
              <MenuItem value={"horror"}>Horror</MenuItem>
              <MenuItem value={"strategy"}>Strategy</MenuItem>
              <MenuItem value={"adventure"}>Adventury</MenuItem>
              <MenuItem value={"RPG"}>RPG</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} sm={4} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-select"
              label="Status"
              value={storeContext.filterByStatus}
              onChange={(e) => storeContext.setFilterByStatus(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"trending"}>Trendy</MenuItem>
              <MenuItem value={"bestseller"}>Bestseller</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginBottom="50px"
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {filteredGames.map((product) => (
            <Box key={product.id}>
              <Badge
                badgeContent={
                  product.discount
                    ? `- ${(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                        100
                      ).toFixed()}%`
                    : 0
                }
                color="secondary"
              >
                <Card
                  sx={{
                    position: "relative",
                    width: 300,
                    boxShadow: "none",
                    height: 300,
                  }}
                >
                  <CardActionArea>
                    <NavLink to={`/store/${product.id}`} key={product.id}>
                      <LazyLoadImage
                        effect="blur"
                        src={product.picture}
                        alt={product.title}
                        height="auto"
                        width="100%"
                        style={{ objectFit: "cover", maxHeight: "200px" }}
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
                          {product.title}
                        </Typography>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            gutterBottom
                            variant="h5"
                            fontSize="15px"
                            component="div"
                          >
                            {product.price}
                            {product.currencyFormat}
                          </Typography>
                          {product.price !== product.oldPrice && (
                            <Typography
                              gutterBottom
                              variant="h5"
                              fontSize="12px"
                              component="div"
                              style={{ textDecoration: "line-through" }}
                            >
                              {product.oldPrice}
                              {product.currencyFormat}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      centerRipple
                      startIcon={<AddOutlinedIcon />}
                      onClick={() => handleAddToCart(product)}
                    >
                      Buy Key
                    </Button>
                    {product.id && isGameOnWishlist(product.id) ? (
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        centerRipple
                        onClick={() =>
                          product.id && handleRemoveFromWishList(product.id)
                        }
                      >
                        <FavoriteIcon color="error" />
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        centerRipple
                        onClick={() => handleWishList(product)}
                      >
                        <FavoriteBorderOutlinedIcon />
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Badge>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Store;
