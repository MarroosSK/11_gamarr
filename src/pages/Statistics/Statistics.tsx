import { useState } from "react";
import { Box, Button } from "@mui/material";
import { purchaseData } from "../../helpers/data";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { BackButton } from "..";
Chart.register(...registerables);

const Statistics = () => {
  // useState
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
      {/* CHARTS */}
      <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <Button onClick={() => setSelectedChart("line")}>Line Chart</Button>
        <Button onClick={() => setSelectedChart("bar")}>Bar Chart</Button>
      </Box>
      {selectedChart === "line" && <Line data={gameData} />}
      {selectedChart === "bar" && <Bar data={gameData} />}

      {/* back to HOME */}
      <BackButton />
    </Box>
  );
};

export default Statistics;
