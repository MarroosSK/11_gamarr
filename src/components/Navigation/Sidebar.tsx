import { NavLink } from "react-router-dom";
import { Box, Typography, List, ListItemButton } from "@mui/material";
import { motion } from "framer-motion";

const Sidebar = () => {



  return (
    <List>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ flexDirection: { xs: "row" } }}
        className="nav"
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton
            sx={{ "&:hover": { background: "transparent" } }}

          >
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              style={{ fontSize: "15px" }}
            >
              <Typography
              >
                Home
              </Typography>
            </motion.div>
          </ListItemButton>
        </NavLink>
        <NavLink to="/store" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton
            sx={{ "&:hover": { background: "transparent" } }}

          >
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              style={{ fontSize: "15px" }}
            >
              <Typography
              >
                Store
              </Typography>
            </motion.div>
          </ListItemButton>
        </NavLink>
        <NavLink to="/articles" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton
            sx={{ "&:hover": { background: "transparent" } }}
          >
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              style={{ fontSize: "15px" }}
            >
              <Typography
              >
                Upcoming
              </Typography>
            </motion.div>
          </ListItemButton>
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
          <ListItemButton
            sx={{ "&:hover": { background: "transparent" } }}

          >
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              style={{ fontSize: "15px" }}
            >
              <Typography
              >
                24/7
              </Typography>
            </motion.div>
          </ListItemButton>
        </NavLink>
      </Box>
    </List>
  );
};

export default Sidebar;
