import { storeProductsData } from "../../helpers/data";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const StoreSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box>
      <Carousel
        responsive={responsive}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        partialVisible={false}
        pauseOnHover={false}
      >
        {storeProductsData.slice(0, 5).map((product) => (
          <NavLink to={`/store/${product.id}`}>
            <Box position="relative" width={"100%"} sx={{ cursor: "pointer" }}>
              <img
                src={product.picture}
                alt={product.title}
                className="img"
                style={{ width: "100vw", height: "70vh" }}
              />
              <Typography
                textAlign="center"
                color="secondary"
                fontSize="25px"
                position="absolute"
                bottom="30px"
                left="20px"
                zIndex={50}
              >
                {product.title}
              </Typography>
            </Box>
          </NavLink>
        ))}
      </Carousel>
    </Box>
  );
};

export default StoreSlider;
