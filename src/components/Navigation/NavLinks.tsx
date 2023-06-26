import { useContext } from "react";
import { Badge, Box, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { DarkModeContext } from "../../context/DarkModeContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const NavLinks = () => {
  const modeContext = useContext(DarkModeContext);
  const shopContext = useContext(ShoppingCartContext);

  //verify context
  if (!shopContext) {
    return null;
  }
  return (
    <Box
      display="flex"
      position="relative"
      sx={{ marginTop: { xs: "15px", sm: 0 } }}
    >
      <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
        <IconButton
          onClick={() => modeContext.setDarkMode(!modeContext.darkMode)}
        >
          {modeContext.darkMode ? (
            <LightModeOutlinedIcon color="primary" />
          ) : (
            <DarkModeOutlinedIcon color="primary" />
          )}
        </IconButton>
      </motion.div>
      <>
        <Badge
          color="error"
          badgeContent={
            shopContext.totalQuantity < 0 ? 0 : shopContext?.totalQuantity
          }
        >
          <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
            <NavLink to="/cart">
              <IconButton>
                <ShoppingCartOutlinedIcon color="primary" />
              </IconButton>
            </NavLink>
          </motion.div>
        </Badge>
        <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
          <NavLink to="/account">
            <IconButton>
              <PersonOutlinedIcon color="primary" />
            </IconButton>
          </NavLink>
        </motion.div>
      </>
    </Box>
  );
};

export default NavLinks;
