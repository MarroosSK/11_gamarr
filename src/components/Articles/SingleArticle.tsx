import { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { articlesData, storeProductsData } from "../../helpers/data";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { Title } from "..";
import { MyArticleType } from "../../types/types";
const SingleArticle = () => {
  const { id } = useParams();

  const [persistArticle, setPersistArticle] = useState<MyArticleType>();

  const similiarGames = storeProductsData.filter((game) => {
    return (
      game.genre === persistArticle?.genre && game.id !== persistArticle?.id
    );
  });



  useEffect(() => {
    const articleById = articlesData.find((article) => article.id === id);
    if (articleById) {
      localStorage.setItem("myArticle", JSON.stringify(articleById));
    }
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("myArticle");
    if (item) {
      const parsedItem = JSON.parse(item);
      setPersistArticle(parsedItem);
    }
  }, []);
  return (
    <article key={persistArticle?.id}>

    <Grid
      container
      display="flex"
      justifyContent="center"
      key={persistArticle?.id}
    >
      <Box
        className="heroPicArticle"
        sx={{ backgroundImage: `url(${persistArticle?.picture[0]})` }}
      ></Box>
      <Grid item position="relative" className="parent">
        <Box
          sx={{
            width: { xs: "250px", sm: "420px" },
            position: "absolute",
            top: "-10%",
            left: { xs: "0", sm: "30%" },
            right: { xs: "0", sm: "auto" },
            margin: "auto",
            transform: {
              xs: "translateY(-50%)",
              md: "translateY(-70%) translateX(-50%)",
            },
          }}
        >
          <img
            src={persistArticle?.picture[0]}
            width="100%"
            height={300}
            style={{ borderRadius: "25px" }}
          />
        </Box>
        <Box className="centered2" width="400px" height={300}>
          <Card
            sx={{
              boxShadow: "none",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(39, 39, 39, 0.7)",
              backdropFilter: "blur(25px)",
              borderRadius: "25px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography fontSize="20px" textAlign="center" color="secondary">
                {persistArticle?.title}
              </Typography>
              <Typography fontSize="12px" textAlign="center">
                Release date: {persistArticle?.releaseDate}
              </Typography>
              <Alert severity="info" sx={{ marginTop: "70px" }}>
                If the price drops before the release, we refund you the
                difference
              </Alert>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                margin: "50px, 50px",
              }}
            >
              <Typography fontSize="20px" color="white">
                75 €
              </Typography>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                centerRipple
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{ alignSelf: "center" }}
                disabled
              >
                Pre-Order
              </Button>
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
            backgroundColor: "rgba(39, 39, 39, 0.2)",
            backdropFilter: "blur(25px)",
            borderRadius: "25px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography fontSize="20px" textAlign="center" color="secondary">
              {persistArticle?.title}
            </Typography>
            <Typography fontSize="12px" textAlign="center">
              Release date: {persistArticle?.releaseDate}
            </Typography>
            <Alert severity="info" sx={{ marginTop: "70px" }}>
              If the price drops before the release, we refund you the
              difference
            </Alert>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              margin: "50px, 50px",
            }}
          >
            <Typography fontSize="20px" color="white">
              75 €
            </Typography>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              centerRipple
              startIcon={<ShoppingCartOutlinedIcon />}
              sx={{ alignSelf: "center" }}
              disabled
            >
              Pre-Order
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item marginTop="100px">
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
                {persistArticle?.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                fontSize="12px"
                component="div"
              >
                {persistArticle?.releaseDate}
              </Typography>
            </Box>
            <Chip
              label={persistArticle?.genre}
              color="secondary"
              variant="outlined"
              sx={{
                "& .MuiChip-label": {
                  overflow: "visible !important",
                },
              }}
            />
            <Typography fontSize="20px">{persistArticle?.publisher}</Typography>
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
              {persistArticle?.text}
            </Typography>
            <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
              marginTop={"10px"}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            ></Stack>
            <Box textAlign="center">
              <Title text="Visuals" />
            </Box>
            <CardMedia
              component="iframe"
              src={persistArticle?.video}
              sx={{
                height: { xs: 200, sm: 300 },
                border: "none", // Prispôsobte hodnotu podľa potreby
                boxShadow: "none", // Odstráňte tieň
                marginBottom: "30px",
              }}
            />
            <Box
              display="flex"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              {persistArticle?.picture.map((pic, index) => (
                <CardMedia
                  component="img"
                  width="150px"
                  sx={{ marginTop: "20px", height: { xs: "200px" } }}
                  image={pic}
                  alt={persistArticle?.title}
                  style={{ objectFit: "contain" }}
                  key={index}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
        <Box textAlign="center">
          <Title text="Similiar games" />
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
        {similiarGames.slice(0, 6).map((product) => (
          <Card
            sx={{ maxWidth: 300, boxShadow: "none", height: "250px" }}
            key={product.id}
          >
            <CardActionArea>
              <NavLink to={`/store/${product.id}`}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={product.picture}
                  alt={product.title}
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
        ))}
      </Grid>
    </Grid>
    </article>
  );
};

export default SingleArticle;
