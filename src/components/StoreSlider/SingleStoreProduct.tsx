import { useState, useContext, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  Chip,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { storeProductsData } from "../../helpers/data";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { MyGameType } from "../../types/types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Title } from "..";
import { MyGamesContext } from "../../context/MyGamesContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from "react-toastify";

const SingleStoreProduct = () => {
  const { id } = useParams();

  
  const context = useContext(ShoppingCartContext);
  const wishlistContext = useContext(MyGamesContext)


  const isGameOnWishlist = (id: string) => {
    return wishlistContext.myGames.some((game) => game.id === id);
  };

  const handleWishList = (item: MyGameType) =>{
    wishlistContext.setMyGames([...wishlistContext.myGames, item])
    toast("Game added to wishlist", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "info"
      });
  }
  const handleRemoveFromWishList = (id: string) =>{
    const filteredList = wishlistContext.myGames.filter((game) => game.id !== id)
    wishlistContext.setMyGames(filteredList)
    toast("Game removed from wishlist", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "error"
      });
  }

  const handleAddToCart = (item: MyGameType) => {
    context?.addItemToCart(item);
    toast("Game added to cart", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success"
      });
  };

  //persist
  const [persistProduct, setPersistProduct] = useState<MyGameType>()

  const similiarGames = storeProductsData.filter((game) => {
    return game.genre === persistProduct?.genre && game.id !== persistProduct?.id;
  });

  
  useEffect(() => {
    const storeProductById = storeProductsData.find(
      (product) => product.id === id
    );
    if(storeProductById){
      localStorage.setItem('myProduct', JSON.stringify(storeProductById));
    }
  }, [id]);

 useEffect(() => {
  const item = localStorage.getItem('myProduct');
   if (item) {
     const parsedItem = JSON.parse(item);
     setPersistProduct(parsedItem);
  }
}, [id]);
  return (
    <section key={persistProduct?.id}>

    <Grid
      container
      display="flex"
      justifyContent="center"
      key={persistProduct?.id}
    >
      <Box
        className="heroPicArticle"
        sx={{ backgroundImage: `url(${persistProduct?.picture})` }}
      ></Box>
      <Grid item position="relative"   className="parent">
        <Box 
            sx={{
              width: {xs: "250px", sm: "420px"},
              position: "absolute",
              top: "-10%",
              left: {xs:"0",sm:"30%"},
              right: {xs:"0", sm: "auto"},
              margin: "auto",
              transform: {xs: "translateY(-50%)", md:"translateY(-70%) translateX(-50%)"},

            }}
        >
          <img
            src={persistProduct?.picture}
            width="100%"
            height={300}
            style={{ borderRadius: "25px" }}
          />
        </Box>
        <Box
          className="centered2"
          width="400px"
          height={300}
        >
          <Card
            sx={{
              boxShadow: "none",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(39, 39, 39, 0.7)",
              backdropFilter: "blur(25px)",
              borderRadius: "25px"
            }}
          >
            <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Typography fontSize="20px" textAlign="center" color="secondary">{persistProduct?.title}</Typography>
              {
                persistProduct?.id &&  isGameOnWishlist(persistProduct?.id) ? (
                    <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    centerRipple
                    onClick={() => persistProduct?.id && handleRemoveFromWishList(persistProduct?.id)}
                  >
                    <FavoriteIcon color="error"/>
                  </Button>
                  ) :(
                    <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    centerRipple
                    onClick={() => persistProduct?.id && handleWishList(persistProduct)}
                  >
                    <FavoriteBorderOutlinedIcon/>
                  </Button>
                  )
                }
              <Alert severity="info" sx={{marginTop: "40px"}}>You can ask for refund within 24 hours!</Alert>
            </CardContent>
            <CardActions sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", margin: "50px, 50px"}}>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="10px">
            {
                        persistProduct?.price !== persistProduct?.oldPrice && (
                        <Typography
                          gutterBottom
                          variant="h5"
                          fontSize="12px"
                          component="div"
                          style={{textDecoration: "line-through"}}
                          >
                          {persistProduct?.oldPrice}{persistProduct?.currencyFormat}
                        </Typography>
                        )
                      }
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontSize="25px"
                        component="div"
                        >
                        {persistProduct?.price}{persistProduct?.currencyFormat}
                      </Typography>
    
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="15px">
                      <NavLink to="/store">
                        <Typography color="#ff5f10">back to store</Typography>
                      </NavLink>
                      <Button
                        size="large"
                        variant="outlined"
                        color="secondary"
                        centerRipple
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{alignSelf: "center"}}
                        onClick={() => persistProduct && handleAddToCart(persistProduct)}
                      >
                        Buy
                      </Button>
                    </Box>
              </CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item className="hidden-pre-order" marginTop="200px">
      <Card
            sx={{
              boxShadow: "none",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(39, 39, 39, 0.7)",
              backdropFilter: "blur(25px)",
              borderRadius: "25px"
            }}
          >
            <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Typography fontSize="20px" textAlign="center" color="secondary">{persistProduct?.title}</Typography>
              {
                persistProduct?.id &&  isGameOnWishlist(persistProduct?.id) ? (
                    <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    centerRipple
                    onClick={() => persistProduct?.id && handleRemoveFromWishList(persistProduct?.id)}
                  >
                    <FavoriteIcon color="error"/>
                  </Button>
                  ) :(
                    <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    centerRipple
                    onClick={() => persistProduct?.id && handleWishList(persistProduct)}
                  >
                    <FavoriteBorderOutlinedIcon/>
                  </Button>
                  )
                }
              <Alert severity="info" sx={{marginTop: "40px"}}>You can ask for refund within 24 hours!</Alert>
            </CardContent>
            <CardActions sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", margin: "50px, 50px"}}>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="10px">
            {
                        persistProduct?.price !== persistProduct?.oldPrice && (
                        <Typography
                          gutterBottom
                          variant="h5"
                          fontSize="12px"
                          component="div"
                          style={{textDecoration: "line-through"}}
                          >
                          {persistProduct?.oldPrice}{persistProduct?.currencyFormat}
                        </Typography>
                        )
                      }
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontSize="25px"
                        component="div"
                        >
                        {persistProduct?.price}{persistProduct?.currencyFormat}
                      </Typography>
    
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="15px">
                      <NavLink to="/store">
                        <Typography color="#ff5f10">back to store</Typography>
                      </NavLink>
                      <Button
                        size="large"
                        variant="outlined"
                        color="secondary"
                        centerRipple
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{alignSelf: "center"}}
                        onClick={() => persistProduct && handleAddToCart(persistProduct)}
                      >
                        Buy
                      </Button>
                    </Box>
              </CardActions>
          </Card>
      </Grid>

      <Grid item marginTop="100px" >
        <Card sx={{ boxShadow: "none", background: "none" }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Typography
                gutterBottom
                variant="h5"
                fontSize="30px"
                component="div"
                color="secondary"
              >
                {persistProduct?.title}
              </Typography>
            </Box>
            <Chip  label={persistProduct?.genre} color="secondary" variant="outlined"             sx={{
                '& .MuiChip-label': {
                    overflow: 'visible !important',
                },
            }} />
            <Typography fontSize="20px">{persistProduct?.publisher}</Typography>
            <Typography
              variant="body2"
              fontSize="12px"
              sx={{
                marginTop: "15px",
                lineHeight: "35px",
                maxWidth: "700px",
                margin: "auto",
              }}
            >
              {persistProduct?.text}
            </Typography>
            <Stack 
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
              marginTop={"10px"}
              sx={{ flexDirection: { xs: "column", md: "row" }, backgroundColor: "#101010" }}
              
            >
            </Stack>
            <Box textAlign="center">          
            <Title text="Visuals"/>

          </Box>
          <CardMedia
            component="iframe"
            src={persistProduct?.video}
            sx={{
              height: { xs: 200, sm: 300 },
              border: 'none', // Prispôsobte hodnotu podľa potreby
              boxShadow: 'none', // Odstráňte tieň
              marginBottom: "30px"
            }}
          />
          <Box display="flex" justifyContent="center"  sx={{flexDirection: {xs:"column", md: "row"}}}>
            <img src={persistProduct?.picture} height="200px" style={{marginTop: "20px"}} />
          </Box>
          </CardContent>
        </Card>
          <Box textAlign="center">          
            <Title text="Similiar games"/>

          </Box>
      </Grid>
            {/* similiar */}
            <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          gap={2}
          marginTop="40px"
          marginBottom="40px"
          // sx={{background: "#fff"}}
        >
          {similiarGames.slice(0,6).map((product) => (
            <NavLink to={`/store/${product.id}`} key={product.id}>
            <Card
              sx={{ maxWidth: 300, boxShadow: "none", height: "250px" }}
              key={product.id}
            >
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={product.picture}
                    alt={product.title}
                  />
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontSize="12px"
                      component="div"
                    >
                      {product.price}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            </NavLink>
          ))}
        </Grid>
    </Grid>
    </section>
         
  );
};

export default SingleStoreProduct;

