import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <NavLink to={"/"} style={{ alignSelf: "center", margin: "50px" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          home
        </Button>
      </NavLink>
    </>
  );
};

export default BackButton;
