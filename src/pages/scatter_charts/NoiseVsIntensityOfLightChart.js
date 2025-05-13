import React, { useMemo } from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

// Generate sample data
const generateSensorData = () => {
  const data = [];
  for (let lux = 10; lux <= 10000; lux *= 1.5) {
    const noise = 60 * Math.exp(-0.001 * lux) + (Math.random() * 3 - 1.5); // Random offset
    data.push({ x: lux, y: parseFloat(noise.toFixed(2)) });
  }
  return data;
};

const NoiseVsIntensityOfLightChart = () => {
  const scatterData = useMemo(() => generateSensorData(), []);

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      scale={{ x: "log" }} // log scale for lux axis
      height={300}
      width={600}
      domainPadding={0}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `Lux: ${Math.round(datum.x)}\nNoise: ${datum.y} dB`}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill: "#f9f9f9" }}
              cornerRadius={4}
              pointerLength={5}
            />
          }
        />
      }
    >
      <VictoryAxis
        label="Light Intensity (lux)"
        style={{ axisLabel: { padding: 30 }, tickLabels: { fontSize: 10 } }}
      />
      <VictoryAxis
        dependentAxis
        label="Sensor Noise (dB)"
        style={{ axisLabel: { padding: 40 }, tickLabels: { fontSize: 10 } }}
      />
      <VictoryScatter
        data={scatterData}
        size={4}
        style={{ data: { fill: "#e63946" } }}
      />
    </VictoryChart>
  );
};

export default NoiseVsIntensityOfLightChart;
