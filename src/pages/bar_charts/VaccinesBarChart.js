import React from 'react';
import {VictoryChart,VictoryBar,VictoryAxis,VictoryGroup,VictoryTheme,VictoryTooltip} from 'victory';

const vaccineData = [
  { month: 'Jan', polio: 120, measles: 100, hepB: 80 },
  { month: 'Feb', polio: 150, measles: 110, hepB: 95 },
  { month: 'Mar', polio: 180, measles: 130, hepB: 110 },
  { month: 'Apr', polio: 200, measles: 140, hepB: 105 },
];

const polioData = vaccineData.map((d) => ({ x: d.month, y: d.polio, label: `Polio: ${d.polio}` }));
const measlesData = vaccineData.map((d) => ({ x: d.month, y: d.measles, label: `Measles: ${d.measles}` }));
const hepBData = vaccineData.map((d) => ({ x: d.month, y: d.hepB, label: `Hep B: ${d.hepB}` }));

const VaccinesBarChart = () => (
  <VictoryChart
    width={600}  height={300}
    domainPadding={30} theme={VictoryTheme.material}>
    <VictoryAxis
      tickValues={vaccineData.map((d) => d.month)}
      tickFormat={(x) => x}
    />
    <VictoryAxis dependentAxis />
    <VictoryGroup offset={20} colorScale={["crimson", "#333", "#b22222"]}>
      <VictoryBar
        data={polioData}
        labelComponent={<VictoryTooltip />}
      />
      <VictoryBar
        data={measlesData}
        labelComponent={<VictoryTooltip />}
      />
      <VictoryBar
        data={hepBData}
        labelComponent={<VictoryTooltip />}
      />
    </VictoryGroup>
  </VictoryChart>
);

export default VaccinesBarChart;
