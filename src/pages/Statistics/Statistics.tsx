import { useState } from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { purchaseData } from "../../helpers/data";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Statistics = () => {
  const [gameData] = useState({
    labels: purchaseData.map((data) => data.month),
    datasets: [
      {
        label: "Games bought",
        data: purchaseData.map((data) => data.gamesPurchased),
        backgroundColor: [
          "black",
          "red",
          "#9b9b9b",
          "purple",
          "#ff5f10",
          "blue",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [selectedChart, setSelectedChart] = useState("line");

  return (
    <Box
      sx={{
        width: { xs: "250px", sm: "450px", md: "600px" },
        height: { xs: "250px", sm: "450px", md: "600px" },
      }}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <Button onClick={() => setSelectedChart("line")}>Line Chart</Button>
        <Button onClick={() => setSelectedChart("bar")}>Bar Chart</Button>
      </Box>
      {selectedChart === "line" && <Line data={gameData} />}
      {selectedChart === "bar" && <Bar data={gameData} />}

      <NavLink to={"/"} style={{ alignSelf: "center", marginTop: "40px" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          home
        </Button>
      </NavLink>
    </Box>
  );
};

export default Statistics;
