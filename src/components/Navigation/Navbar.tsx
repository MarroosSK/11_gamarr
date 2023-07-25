import { ChangeEvent, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";
import logo_img from "../../assets/gamar2.png";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { StoreContext } from "../../context/StoreContext";
import { Stack } from "@mui/material";
import { useScroll } from "../../hooks/useScroll";

const Navbar = () => {
  const { scrolled } = useScroll();
  const navigate = useNavigate();

  const storeContext = useContext(StoreContext);

  const handleStore = (e: ChangeEvent<HTMLInputElement>) => {
    storeContext.setSearchValue(e.target.value);
    navigate("/store");
  };

  return (
    <AppBar
      elevation={0}
      style={{ position: "fixed" }}
      className={scrolled ? "scrolled" : ""}
      sx={{
        backgroundColor: "#000",
        backdropFilter: "blur(10px)",
        borderBottom: "none",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          margin: { xs: "10px 0", md: 0 },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: { sm: "180px", md: "200px" },
          }}
        >
          <img src={logo_img} style={{ width: "100%" }} alt="Logo" />
        </Box>
        {/* search */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {/* SIDEBAR LINKS */}
          <Stack direction="row" spacing={1}>
            <Sidebar />
          </Stack>

          {/* SEARCH BAR */}
          <TextField
            id="search"
            type="search"
            label="Search"
            size="small"
            value={storeContext.searchValue}
            onChange={(e) =>
              handleStore(e as React.ChangeEvent<HTMLInputElement>)
            }
            InputProps={{
              style: {
                borderRadius: "20px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* LINKS */}
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
