import { useMemo } from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  { x: new Date(2025, 0, 1), cardiology: 12, orthopedics: 6,  neurology: 5 },
  { x: new Date(2025, 1, 1), cardiology: 9,  orthopedics: 11, neurology: 7 },
  { x: new Date(2025, 2, 1), cardiology: 15, orthopedics: 8,  neurology: 10 },
  { x: new Date(2025, 3, 1), cardiology: 11, orthopedics: 14, neurology: 6 },
  { x: new Date(2025, 4, 1), cardiology: 18, orthopedics: 10, neurology: 8 },
  { x: new Date(2025, 5, 1), cardiology: 14, orthopedics: 9,  neurology: 12 },
  { x: new Date(2025, 6, 1), cardiology: 17, orthopedics: 13, neurology: 9 },
  { x: new Date(2025, 7, 1), cardiology: 13, orthopedics: 15, neurology: 10 },
  { x: new Date(2025, 8, 1), cardiology: 20, orthopedics: 12, neurology: 7 },
  { x: new Date(2025, 9, 1), cardiology: 16, orthopedics: 17, neurology: 11 },
  { x: new Date(2025, 10, 1), cardiology: 19, orthopedics: 14, neurology: 6 },
  { x: new Date(2025, 11, 1), cardiology: 11, orthopedics: 10, neurology: 13 },
];

const TotalSurgeriesAreaChart = () => {
  const totalSurgeriesData = useMemo(() => {
    return data.map(item => ({
      x: item.x,
      y: item.cardiology + item.orthopedics + item.neurology,
    }));
  }, [data]);

  return (
    <VictoryChart 
      theme={VictoryTheme.material}
      scale={{ x: "time" }}
      width={600}
      height={300}
    >
      <VictoryAxis
        tickValues={data.map(d => d.x)}
        tickFormat={(x) => x.toLocaleDateString("en-US", { month: 'short' })}
        style={{
          tickLabels: { fontSize: 11, angle: -45, textAnchor: "end", padding: 5 },
        }}
      />
      <VictoryAxis dependentAxis />
      <VictoryArea
        data={totalSurgeriesData}
        style={{
          data: { fill: "#b22222", opacity: 0.6, stroke: "#333", strokeWidth: 4 },
        }}
      />
    </VictoryChart>
  );
};

export default TotalSurgeriesAreaChart;
