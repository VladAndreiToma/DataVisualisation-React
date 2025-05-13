import React from "react";
import { VictoryPie } from "victory";

const cpuUsageData = [
  { x: "Signal Processing", y: 45 },
  { x: "Communication", y: 25 },
  { x: "Idle", y: 15 },
  { x: "Other", y: 15 },
];

const AnimatedCpuPieChart = () => {
  return (
    <VictoryPie
      data={cpuUsageData}
      width={500}  height={300}
      animate={{
        duration: 1500,
        onLoad: { duration: 1000 },
        easing: "quadInOut"
      }}

      colorScale={["#007bff", "#28a745", "#ffc107", "#dc3545"]}
      labels={({ datum }) => `${datum.x}\n${datum.y}%`}
      style={{
        labels: { fontSize: 10, fill: "#333" },
      }}
      padAngle={3}
      innerRadius={40}
    />
  );
};

export default AnimatedCpuPieChart;
