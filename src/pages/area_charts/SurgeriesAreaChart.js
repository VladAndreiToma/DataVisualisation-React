import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from "victory";

const data = [
  { x: new Date(2025, 0, 1), y: 30 },   // Jan
  { x: new Date(2025, 1, 1), y: 45 },   // Feb
  { x: new Date(2025, 2, 1), y: 50 },   // Mar
  { x: new Date(2025, 3, 1), y: 60 },   // Apr
  { x: new Date(2025, 4, 1), y: 75 },   // May
  { x: new Date(2025, 5, 1), y: 85 },   // Jun
  { x: new Date(2025, 6, 1), y: 70 },   // Jul
  { x: new Date(2025, 7, 1), y: 60 },   // Aug
  { x: new Date(2025, 8, 1), y: 95 },   // Sep
  { x: new Date(2025, 9, 1), y: 100 },  // Oct
  { x: new Date(2025, 10, 1), y: 30 },  // Nov
  { x: new Date(2025, 11, 1), y: 20 },  // Dec
];

const SurgeriesOverTimeArea = () => (
  <VictoryChart
    width={600}
    height={300}
    theme={VictoryTheme.material}
    scale={{ x: "time" }}
  >
    <VictoryAxis
      tickValues={data.map((d) => d.x)}
      tickFormat={(x) => x.toLocaleDateString("en-US", { month: "short" })}
      style={{
        tickLabels: { fontSize: 10, angle: -45, textAnchor: "end" , padding: 5 },
      }}
    />
    <VictoryAxis
      dependentAxis
      style={{
        tickLabels: { fontSize: 10, padding: 5 },
      }}
    />
    <VictoryArea
      data={data}
      style={{
        data: {
          fill: "crimson",
          opacity: 0.6,
          stroke: "crimson",
          strokeWidth: 1,
        },
      }}
    />
  </VictoryChart>
);

export default SurgeriesOverTimeArea;