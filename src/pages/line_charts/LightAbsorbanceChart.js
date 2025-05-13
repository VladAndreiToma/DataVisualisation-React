import { useMemo } from "react";
import {VictoryChart,VictoryLine,VictoryTheme,VictoryAxis,VictoryTooltip,VictoryVoronoiContainer, } from "victory";

const absorptionData = [
  { wavelength: 200, absorbance: 0.05 },
  { wavelength: 220, absorbance: 0.1 },
  { wavelength: 240, absorbance: 0.25 },
  { wavelength: 260, absorbance: 0.9 },
  { wavelength: 280, absorbance: 0.7 },
  { wavelength: 300, absorbance: 0.4 },
  { wavelength: 320, absorbance: 0.15 },
  { wavelength: 340, absorbance: 0.05 },
];

const LightAbsorbanceChart = () => {
  
    // i store data as a list of objects with x and y fields so i can put them easily inside the graphics
    // i use memo to avoid redundant calculation if the array is big, in real case such array is to be fetched from server so you want
    // to use memo to avoid lazy mounting histogram if nothing changes
    // the absortio data is put there to mimic something coming from the server

    const lineData = useMemo(
    () =>
      absorptionData.map((d) => ({
        x: d.wavelength,
        y: d.absorbance,
      })),
    []
  );

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={300}
      width={600}
      domainPadding={20}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `λ: ${datum.x} nm\nA: ${datum.y}`}
          labelComponent={<VictoryTooltip flyoutStyle={{ fill: "white" }} />}
        />
      }
    >
      <VictoryAxis
        label="lambda(nm)"
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 10 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Absorption(Absorption Units)"
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 10 },
        }}
      />
      <VictoryLine
        data={lineData}
        interpolation="natural"
        style={{
          data: { stroke: "crimson", strokeWidth: 4 },
        }}
      />
    </VictoryChart>
  );
};

export default LightAbsorbanceChart;