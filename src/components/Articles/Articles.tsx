import { articlesData } from "../../helpers/data";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import { Title } from "..";
import { NavLink } from "react-router-dom";

const Articles = () => {


  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="95px"
      marginBottom="50px"
    >
      <Title text="Upcoming" />
      <Grid item container justifyContent="center" alignItems="stretch" gap={2}>
        {articlesData.map((article) => (
          <NavLink to={`/articles/${article.id}`}>
            <Card sx={{ maxWidth: 450, boxShadow: "none", height: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={article.picture[0]}
                  alt={article.title}
                />
              </CardActionArea>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize="12px"
                    component="div"
                    color="secondary"
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
                <Typography variant="body2" fontSize="12px">
                  {article.text.slice(0, 200).trim()}...
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </NavLink>
        ))}
      </Grid>
    </Grid>
  );
};

export default Articles;
