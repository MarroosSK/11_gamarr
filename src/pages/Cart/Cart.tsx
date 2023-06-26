import { useContext } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Title } from "../../components";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { MyGameType } from "../../types/types";

const Cart = () => {
  const context = useContext(ShoppingCartContext);

  const handleIncrement = (item: MyGameType) => {
    context?.incrementItemQuantity(item);
  };

  const handleDecrement = (item: MyGameType) => {
    context?.decrementItemQuantity(item);
  };

  const handleRemove = (item: MyGameType) => {
    context?.removeItemFromCart(item);
  };

  const handleClearCart = () => {
    context?.clearCart();
  };

  const totalPrice = context?.myCart.reduce(
    (total: number, item: MyGameType) => total + item.price * item.quantity,
    0
  );
  const totalCount = context?.myCart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop="80px"
      marginBottom="50px"
      sx={{minHeight: "100vh"}}
    >
      <Title text="My Cart" />
      <Grid
        item
        container
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "row" },
          gap: "50px",
        }}
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {context?.myCart.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            <Grid item>
              {context?.myCart.map((item: MyGameType) => (
                <Card
                  key={item.id}
                  sx={{
                    width: { xs: "250px", sm: "400px" },
                    marginBottom: "30px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200px"
                    image={item.picture}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Price: {item.price.toFixed(2)}€
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Total: {(item.price * item.quantity).toFixed(2)}€
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                      onClick={() => handleIncrement(item)}
                    >
                      +1
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleDecrement(item)}
                    >
                      -1
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          )}
        </Grid>
        {context?.myCart.length > 0 && (
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="5px"
            sx={{
              boxShadow: "none",
              width: { xs: "200px", sm: "300px" },
              height: "200px",
              backgroundColor: "rgba(39, 39, 39, 0.2)",
              borderRadius: "25px",
            }}
          >
            <Typography variant="h6" component="div" marginTop="25px">
              Total Price: {totalPrice.toFixed(2)}€
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Total Quantity: {totalCount}
            </Typography>
            <Box
              display="flex"
              gap="15px"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Button
                variant="outlined"
                color="success"
                onClick={() => alert(`Thank You for checking this app out :}`)}
              >
                Checkout
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Cart;
