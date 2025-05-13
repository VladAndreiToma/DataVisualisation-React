import React, { useMemo } from 'react';
import { VictoryChart, VictoryBoxPlot, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryGroup } from 'victory';

// Sample data for Website Traffic (random values)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const websiteTrafficData = months.map((month, index) => ({
  x: month,
  y: [
    Math.floor(1000 + Math.random() * 500),
    Math.floor(1100 + Math.random() * 600),
    Math.floor(1200 + Math.random() * 700),
    Math.floor(1300 + Math.random() * 800),
    Math.floor(1500 + Math.random() * 900),
    Math.floor(1600 + Math.random() * 1000)
  ],
}));

// A helper function to generate random colors
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const WebsiteTrafficBoxChart = () => {
  const data = useMemo(() => websiteTrafficData, []);

  return (
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      animate={{ duration: 1000, easing: 'bounce' }}
      height={400} width={800}
    >
      {/* X-Axis */}
      <VictoryAxis
        tickValues={months}
        style={{
          axis: { stroke: '#111' }, // Axis color
          tickLabels: {
            fontSize: 12,
            angle: -45,
            padding: 10,
            textAnchor: 'end',
            fontWeight: 'bold',
            fill: '#111', // Tick label color
          },
        }}
      />
      
      {/* Y-Axis */}
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: '#111' }, // Axis color
          tickLabels: {
            fontSize: 12,
            fontWeight: 'bold',
            fill: '#111', // Tick label color
          },
        }}
      />
      
      <VictoryGroup offset={12}>
        {data.map((datum, index) => (
          <VictoryBoxPlot
            key={index}
            data={[datum]}
            style={{
              data: {
                fill: generateRandomColor(), // Assign a random color to each box
              },
              labels: { fill: '#111' }, // Label color
              parent: { border: '1px solid #ccc' },
            }}
            labels={({ datum }) => `Range: ${Math.min(...datum.y)} - ${Math.max(...datum.y)}`}
            labelComponent={<VictoryTooltip />}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  );
};

export default WebsiteTrafficBoxChart;
