import React from "react";
import { VictoryPie } from "victory";

const laserWavelengthData = [
  { x: "405 nm (violet)", y: 20 },
  { x: "532 nm (green)", y: 30 },
  { x: "650 nm (red)", y: 50 },
];

const LaserSpectrumPieChart = () => {
  return (
    <VictoryPie width={500} height={300}
      data={laserWavelengthData}
      colorScale={["#7b68ee", "#32cd32", "#dc143c"]} // violet, green, red
      labels={({ datum }) => `${datum.x}\n${datum.y}%`}
      style={{
        labels: { fontSize: 10, fill: "#000" },
      }}
      innerRadius={50}
      padAngle={2}
    />
  );
};

export default LaserSpectrumPieChart;
