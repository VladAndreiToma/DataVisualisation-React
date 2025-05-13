import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer
} from 'victory';

// Date: temperatură (°C) vs conductivitate (S/m)
const temperatureData = [
  { temperature: 0, conductivity: 1.2 },
  { temperature: 5, conductivity: 1.5 },
  { temperature: 10, conductivity: 1.7 },
  { temperature: 15, conductivity: 1.9 },
  { temperature: 20, conductivity: 2.1 },
  { temperature: 25, conductivity: 2.5 },
  { temperature: 30, conductivity: 2.9 },
  { temperature: 35, conductivity: 3.2 },
  { temperature: 40, conductivity: 3.5 },
  { temperature: 45, conductivity: 3.8 },
  { temperature: 50, conductivity: 4.1 },
  { temperature: 55, conductivity: 4.5 },
  { temperature: 60, conductivity: 4.8 },
  { temperature: 65, conductivity: 5.2 },
  { temperature: 70, conductivity: 5.5 },
  { temperature: 75, conductivity: 5.8 },
  { temperature: 80, conductivity: 6.2 },
  { temperature: 85, conductivity: 6.6 },
  { temperature: 90, conductivity: 7.0 },
  { temperature: 95, conductivity: 7.5 },
  { temperature: 100, conductivity: 8.0 },
];

// Conversie pentru Victory
const lineData = temperatureData.map(d => ({
  x: d.temperature,
  y: d.conductivity,
}));

const TemperatureConductivityChart = () => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={400}
      width={700}
      domainPadding={20}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) =>
            `Temp: ${datum.x}°C\nConductivity: ${datum.y} S/m`
          }
          labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white" }} />}
        />
      }
    >
      <VictoryAxis
        label="Temperature (°C)"
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 10 }
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Conductivity (S/m)"
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 10 }
        }}
      />
      <VictoryLine
        data={lineData}
        style={{
          data: { stroke: "#007bff", strokeWidth: 2 }
        }}
      />
      <VictoryScatter
        data={lineData}
        size={4}
        style={{
          data: { fill: "#007bff" }
        }}
      />
    </VictoryChart>
  );
};

export default TemperatureConductivityChart;
