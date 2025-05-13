import { VictoryArea , VictoryChart , VictoryAxis , VictoryTheme } from "victory";

const data=[
  { x: new Date(2025, 0, 1), cardiology: 20, orthopedics: 5, neurology: 50 },
  { x: new Date(2025, 1, 1), cardiology: 18, orthopedics: 10, neurology: 28 },
  { x: new Date(2025, 2, 1), cardiology: 20, orthopedics: 12, neurology: 10 },
  { x: new Date(2025, 3, 1), cardiology: 25, orthopedics: 15, neurology: 25 },
  { x: new Date(2025, 4, 1), cardiology: 30, orthopedics: 20, neurology: 20 },
  { x: new Date(2025, 5, 1), cardiology: 35, orthopedics: 25, neurology: 25 },
  { x: new Date(2025, 6, 1), cardiology: 40, orthopedics: 30, neurology: 30 },
  { x: new Date(2025, 7, 1), cardiology: 45, orthopedics: 35, neurology: 35 },
  { x: new Date(2025, 8, 1), cardiology: 50, orthopedics: 40, neurology: 40 },
  { x: new Date(2025, 9, 1), cardiology: 55, orthopedics: 25, neurology: 65 },
  { x: new Date(2025, 10, 1), cardiology: 60, orthopedics: 20, neurology: 40 },
  { x: new Date(2025, 11, 1), cardiology: 65, orthopedics: 55, neurology: 35 },

];


const SurgeriesStackedAreaChart = () => (
    <VictoryChart 
        width={600} height={300}
        theme={VictoryTheme.material} scale={{ x: "time" }}>
    <VictoryAxis tickValues={data.map(d => d.x)}
        tickFormat={(x)=>x.toLocaleDateString("en-US", {month: 'short'})}
        style={{
        tickLabels: { fontSize: 11, angle: -45, textAnchor: "end" , padding: 5 },
      }}
    />
    <VictoryAxis style={{ fontSize: 8 }} dependentAxis />
    
    <VictoryArea
      data={data}
      x="x"
      y="cardiology"
      style={{
        data: { fill: "crimson", opacity: 0.8 },
      }}
    />
    <VictoryArea
      data={data}
      x="x"
      y="orthopedics"
      style={{
        data: { fill: "#333", opacity: 0.8 },
      }}
    />
    <VictoryArea
      data={data}
      x="x"
      y="neurology"
      style={{
        data: { fill: "#b22222", opacity: 0.7 },
      }}
    />
  </VictoryChart>
);

export default SurgeriesStackedAreaChart;