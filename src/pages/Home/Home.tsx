import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Title } from "../../components";
import {  useContext } from "react";
import Divider from "@mui/material/Divider";
import { NavLink, useNavigate } from "react-router-dom";
import { articlesData, categories } from "../../helpers/data";
import { StoreContext } from "../../context/StoreContext";
import NetworkCheckOutlinedIcon from '@mui/icons-material/NetworkCheckOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';



const Home = () => {

  //store context
  const navigate = useNavigate()
  const storeContext = useContext(StoreContext)

  const handleCategory = (cat: string) =>{
      storeContext.setFilterByGenre(cat)
       navigate("/store")
  } 
    
  const handleStatus = (status: string) =>{
    storeContext.setFilterByStatus(status)
     navigate("/store")
} 
  




  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      
    >
        <Box position="relative" className="heroPic">
      <NavLink to="/store">
          <Box position="absolute" sx={{              boxShadow: "none",
            padding: "15px",
            backgroundColor: "rgba(39, 39, 39, 0.2)",
            backdropFilter: "blur(25px)",
              borderRadius: "25px", bottom:{ xs: "10px", sm: "30px", md:"80px"}, left:{ xs: "30px", sm: "80px", md:"130px"}, zIndex:"55", margin: "50px",}}>
          <Chip label="NEW" color="error" variant="outlined"             sx={{
                '& .MuiChip-label': {
                    overflow: 'visible !important',
                },
            }} />
            <Typography        sx={{
          fontSize: "25px"
        }}>Diablo IV</Typography>
            <Typography         sx={{
          fontSize: "33px"
        }}>75.55 €</Typography>
          </Box>

      </NavLink>
        </Box>

      <Grid
        
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        
      >
        <Box  >

        <Box display="flex"  alignItems="center" sx={{flexDirection:{xs:"column"}, justifyContent: {xs:"center"}}}>
          <Title text="Trending"  />
            <Button variant="contained"  sx={{marginBottom:"50px"}} onClick={() => handleStatus("trending")}>View All</Button>
        </Box>
        <Grid
          item
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          marginBottom="50px"
        >



        {
          storeContext.filterByTrendy.slice(0,9).map((article)=>(
            <NavLink to={`/store/${article.id}`} key={article.id}>
            <Card
   sx={{ width: { xs: 250, sm: 350, md: 300 }, boxShadow: "none" }}
   key={article.id}
 >
   <CardActionArea>

     <CardMedia
         component="img"
         height="100%"
         image={article.picture}
         alt={article.title}
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
           {article.title}
         </Typography>
         <Typography
           gutterBottom
           variant="h5"
           fontSize="12px"
           component="div"
         >
           {article.price}{article.currencyFormat}
         </Typography>
       </Box>
     </CardContent>
   </CardActionArea>
 </Card>
 </NavLink>
          ))
        }

 

        </Grid>
        </Box>
        <Box sx={{background: "#101010"}}>

<Grid
  item
  display="flex"
  sx={{flexDirection: {xs: "column", sm: "row"}}}
  justifyContent="center"
  gap="16px"
  margin="50px"
>


<Box display="flex" justifyContent="center" alignItems="center" gap="5px" >
  <NetworkCheckOutlinedIcon />
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Typography fontSize="15px">Very fast</Typography>
    <Typography fontSize="10px">Instant digital download</Typography>
  </Box>
</Box>
<Divider orientation="vertical" flexItem />
<Box display="flex" justifyContent="center" alignItems="center" gap="5px">
  <VerifiedUserOutlinedIcon />
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Typography fontSize="15px">Reliable & safe</Typography>
    <Typography fontSize="10px">Many games</Typography>
  </Box>
</Box>
<Divider orientation="vertical" flexItem />
<Box display="flex" justifyContent="center" alignItems="center" gap="5px">
  <HeadsetMicOutlinedIcon />
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
    <Typography fontSize="15px">Customer support</Typography>
    <Typography fontSize="10px">Human support 24/7</Typography>
  </Box>
</Box>


</Grid>
</Box>
        <Box  >

        <Box display="flex"  alignItems="center" sx={{ flexDirection:{xs:"column"}, justifyContent: {xs:"center"}}} >
          <Title text="Bestsellers"  />
            <Button variant="contained"  sx={{marginBottom:"50px"}} onClick={()=> handleStatus("bestseller")}>View All</Button>
        </Box>
        <Grid
          item
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          marginBottom="50px"
        >

        {
          storeContext.filterByBestseller.slice(0,6).map((article)=>(
            <NavLink to={`/store/${article.id}`} key={article.id}>
            <Card
   sx={{ width: { xs: 250, sm: 350, md: 300 }, boxShadow: "none" }}
   key={article.id}
 >
   <CardActionArea>

     <CardMedia
         component="img"
         height="100%"
         image={article.picture}
         alt={article.title}
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
           {article.title}
         </Typography>
         <Typography
           gutterBottom
           variant="h5"
           fontSize="12px"
           component="div"
         >
           {article.price}{article.currencyFormat}
         </Typography>
       </Box>
     </CardContent>
   </CardActionArea>
 </Card>
 </NavLink>
          ))
        }
 

        </Grid>
        </Box>


        <Box className="heroPic2" sx={{background: "#101010"}} >

        <Box display="flex"  alignItems="center"  sx={{background: "#101010", flexDirection:{xs:"column"}, justifyContent: {xs:"center"}}}   >
          <Title text="Categories"  />
        </Box>
        <Grid
          item
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          marginBottom="150px"
        >

        {
          categories.map((category)=>(
            <NavLink to={`/store`} onClick={()=> handleCategory(category.genre)} key={category.id}>
                       <Card
              sx={{position:"relative", width: { xs: 250}, boxShadow: "none" }}
              key={category.id}
            >

              <img src={category.icon} style={{position:"absolute", bottom:"0", right: "-50px", zIndex:"55"}} className="category-icon"/>
             
                <CardMedia
                    component="img"
                    height="250px"
                    image={category.backgroundImg}
                    alt={category.title}
                    sx={{opacity: 0.2}}
                  />

                <CardContent>

                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontSize="15px"
                      component="div"
                      color="secondary"
                    >
                      {category.title}
                    </Typography>
                  </Box>
                </CardContent>
            </Card>
            </NavLink>
          ))
        }
 

        </Grid>
        </Box>



        
        <Box display="flex" alignItems="center" sx={{flexDirection:{xs:"column"}, justifyContent: {xs:"center"}}} >
          <Title text="Upcoming"  />
          <NavLink to="/articles">
            <Button variant="contained"  sx={{marginBottom:"50px"}} >View All</Button>
          </NavLink>
        </Box>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          gap={2}
          marginBottom="50px"
        >
          {articlesData.slice(0, 3).map((article) => (
            <NavLink to={`/articles/${article.id}`} key={article.id}>
                       <Card
              sx={{ width: { xs: 250, sm: 350, md: 300 }, boxShadow: "none" }}
              key={article.id}
            >
              <CardActionArea>
  
                <CardMedia
                    component="img"
                    height="100%"
                    image={article.picture[0]}
                    alt={article.title}
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
                      {article.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontSize="12px"
                      component="div"
                    >
                      {article.releaseDate}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            </NavLink>
          ))} 
        </Grid>
      </Grid>


    </Grid>
  );
};

export default Home;
